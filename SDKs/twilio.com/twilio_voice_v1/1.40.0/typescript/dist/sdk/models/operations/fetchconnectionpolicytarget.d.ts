import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const FetchConnectionPolicyTargetServerList: readonly ["https://voice.twilio.com"];
export declare class FetchConnectionPolicyTargetSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class FetchConnectionPolicyTargetRequest extends SpeakeasyBase {
    /**
     * The SID of the Connection Policy that owns the Target.
     */
    connectionPolicySid: string;
    /**
     * The unique string that we created to identify the Target resource to fetch.
     */
    sid: string;
}
export declare class FetchConnectionPolicyTargetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    voiceV1ConnectionPolicyConnectionPolicyTarget?: shared.VoiceV1ConnectionPolicyConnectionPolicyTarget;
}
