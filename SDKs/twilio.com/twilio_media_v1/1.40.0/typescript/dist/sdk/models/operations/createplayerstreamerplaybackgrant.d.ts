import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const CreatePlayerStreamerPlaybackGrantServerList: readonly ["https://media.twilio.com"];
export declare class CreatePlayerStreamerPlaybackGrantSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class CreatePlayerStreamerPlaybackGrantCreatePlayerStreamerPlaybackGrantRequest extends SpeakeasyBase {
    /**
     * The full origin URL where the livestream can be streamed. If this is not provided, it can be streamed from any domain.
     */
    accessControlAllowOrigin?: string;
    /**
     * The time to live of the PlaybackGrant. Default value is 15 seconds. Maximum value is 60 seconds.
     */
    ttl?: number;
}
export declare class CreatePlayerStreamerPlaybackGrantRequest extends SpeakeasyBase {
    requestBody?: CreatePlayerStreamerPlaybackGrantCreatePlayerStreamerPlaybackGrantRequest;
    /**
     * The unique string generated to identify the PlayerStreamer resource associated with this PlaybackGrant
     */
    sid: string;
}
export declare class CreatePlayerStreamerPlaybackGrantResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Created
     */
    mediaV1PlayerStreamerPlayerStreamerPlaybackGrant?: shared.MediaV1PlayerStreamerPlayerStreamerPlaybackGrant;
}
