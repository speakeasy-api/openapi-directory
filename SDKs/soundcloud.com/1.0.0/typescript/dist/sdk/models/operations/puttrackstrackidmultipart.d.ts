import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PutTracksTrackIdMultipartSecurity extends SpeakeasyBase {
    authHeader: string;
}
export declare class PutTracksTrackIdMultipartRequest extends SpeakeasyBase {
    /**
     * Track payload
     */
    trackDataRequest?: shared.TrackDataRequest;
    /**
     * SoundCloud Track id
     */
    trackId: number;
}
export declare class PutTracksTrackIdMultipartResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Bad Request
     */
    error?: shared.ErrorT;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    track?: shared.Track;
}
