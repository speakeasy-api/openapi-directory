import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostLikesTracksTrackIdSecurity extends SpeakeasyBase {
    authHeader: string;
}
export declare class PostLikesTracksTrackIdRequest extends SpeakeasyBase {
    /**
     * SoundCloud Track id
     */
    trackId: number;
}
export declare class PostLikesTracksTrackIdResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Bad Request
     */
    error?: shared.ErrorT;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Too Many Requests
     */
    tooManyRequests?: shared.TooManyRequests;
}
