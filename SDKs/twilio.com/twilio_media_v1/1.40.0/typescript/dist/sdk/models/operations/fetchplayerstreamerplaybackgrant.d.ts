import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const FetchPlayerStreamerPlaybackGrantServerList: readonly ["https://media.twilio.com"];
export declare class FetchPlayerStreamerPlaybackGrantSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class FetchPlayerStreamerPlaybackGrantRequest extends SpeakeasyBase {
    /**
     * The SID of the PlayerStreamer resource to fetch.
     */
    sid: string;
}
export declare class FetchPlayerStreamerPlaybackGrantResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    mediaV1PlayerStreamerPlayerStreamerPlaybackGrant?: shared.MediaV1PlayerStreamerPlayerStreamerPlaybackGrant;
}
