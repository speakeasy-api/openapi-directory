import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const FetchByocTrunkServerList: readonly ["https://voice.twilio.com"];
export declare class FetchByocTrunkSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class FetchByocTrunkRequest extends SpeakeasyBase {
    /**
     * The Twilio-provided string that uniquely identifies the BYOC Trunk resource to fetch.
     */
    sid: string;
}
export declare class FetchByocTrunkResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    voiceV1ByocTrunk?: shared.VoiceV1ByocTrunk;
}
