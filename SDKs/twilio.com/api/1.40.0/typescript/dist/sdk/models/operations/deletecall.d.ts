import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare const DeleteCallServerList: readonly ["https://api.twilio.com"];
export declare class DeleteCallSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class DeleteCallRequest extends SpeakeasyBase {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Call resource(s) to delete.
     */
    accountSid: string;
    /**
     * The Twilio-provided Call SID that uniquely identifies the Call resource to delete
     */
    sid: string;
}
export declare class DeleteCallResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
