import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const UpdateStreamServerList: readonly ["https://api.twilio.com"];
export declare class UpdateStreamSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class UpdateStreamUpdateStreamRequest extends SpeakeasyBase {
    status: shared.StreamEnumUpdateStatusEnum;
}
export declare class UpdateStreamRequest extends SpeakeasyBase {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created this Stream resource.
     */
    accountSid: string;
    /**
     * The SID of the [Call](https://www.twilio.com/docs/voice/api/call-resource) the Stream resource is associated with.
     */
    callSid: string;
    requestBody?: UpdateStreamUpdateStreamRequest;
    /**
     * The SID of the Stream resource, or the `name` used when creating the resource
     */
    sid: string;
}
export declare class UpdateStreamResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    apiV2010AccountCallStream?: shared.ApiV2010AccountCallStream;
}
