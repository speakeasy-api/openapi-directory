import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare const DeleteConnectionPolicyTargetServerList: readonly ["https://voice.twilio.com"];
export declare class DeleteConnectionPolicyTargetSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class DeleteConnectionPolicyTargetRequest extends SpeakeasyBase {
    /**
     * The SID of the Connection Policy that owns the Target.
     */
    connectionPolicySid: string;
    /**
     * The unique string that we created to identify the Target resource to delete.
     */
    sid: string;
}
export declare class DeleteConnectionPolicyTargetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
