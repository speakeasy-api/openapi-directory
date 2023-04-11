import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const FetchIpRecordServerList: readonly ["https://voice.twilio.com"];
export declare class FetchIpRecordSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class FetchIpRecordRequest extends SpeakeasyBase {
    /**
     * The Twilio-provided string that uniquely identifies the IP Record resource to fetch.
     */
    sid: string;
}
export declare class FetchIpRecordResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    voiceV1IpRecord?: shared.VoiceV1IpRecord;
}
