import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostRepostsTracksTrackIdSecurity extends SpeakeasyBase {
    authHeader: string;
}
export declare class PostRepostsTracksTrackIdRequest extends SpeakeasyBase {
    /**
     * SoundCloud Track id
     */
    trackId: number;
}
export declare class PostRepostsTracksTrackIdResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Unauthorized
     */
    error?: shared.ErrorT;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
