import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare const DeleteConnectionPolicyServerList: readonly ["https://voice.twilio.com"];
export declare class DeleteConnectionPolicySecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class DeleteConnectionPolicyRequest extends SpeakeasyBase {
    /**
     * The unique string that we created to identify the Connection Policy resource to delete.
     */
    sid: string;
}
export declare class DeleteConnectionPolicyResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
