import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetMeTracksTrackIdSecurity extends SpeakeasyBase {
    authHeader: string;
}
export declare class GetMeTracksTrackIdRequest extends SpeakeasyBase {
    /**
     * SoundCloud Track id
     */
    trackId: number;
}
export declare class GetMeTracksTrackIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    track?: shared.Track;
}
