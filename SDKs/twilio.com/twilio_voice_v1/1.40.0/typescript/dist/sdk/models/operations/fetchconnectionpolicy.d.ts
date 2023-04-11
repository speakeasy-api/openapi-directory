import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const FetchConnectionPolicyServerList: readonly ["https://voice.twilio.com"];
export declare class FetchConnectionPolicySecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class FetchConnectionPolicyRequest extends SpeakeasyBase {
    /**
     * The unique string that we created to identify the Connection Policy resource to fetch.
     */
    sid: string;
}
export declare class FetchConnectionPolicyResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    voiceV1ConnectionPolicy?: shared.VoiceV1ConnectionPolicy;
}
