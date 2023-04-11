import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const FetchPlayerStreamerServerList: readonly ["https://media.twilio.com"];
export declare class FetchPlayerStreamerSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class FetchPlayerStreamerRequest extends SpeakeasyBase {
    /**
     * The SID of the PlayerStreamer resource to fetch.
     */
    sid: string;
}
export declare class FetchPlayerStreamerResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    mediaV1PlayerStreamer?: shared.MediaV1PlayerStreamer;
}
