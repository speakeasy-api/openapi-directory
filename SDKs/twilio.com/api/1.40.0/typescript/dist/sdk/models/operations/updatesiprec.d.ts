import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const UpdateSiprecServerList: readonly ["https://api.twilio.com"];
export declare class UpdateSiprecSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class UpdateSiprecUpdateSiprecRequest extends SpeakeasyBase {
    status: shared.SiprecEnumUpdateStatusEnum;
}
export declare class UpdateSiprecRequest extends SpeakeasyBase {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created this Siprec resource.
     */
    accountSid: string;
    /**
     * The SID of the [Call](https://www.twilio.com/docs/voice/api/call-resource) the Siprec resource is associated with.
     */
    callSid: string;
    requestBody?: UpdateSiprecUpdateSiprecRequest;
    /**
     * The SID of the Siprec resource, or the `name` used when creating the resource
     */
    sid: string;
}
export declare class UpdateSiprecResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    apiV2010AccountCallSiprec?: shared.ApiV2010AccountCallSiprec;
}
