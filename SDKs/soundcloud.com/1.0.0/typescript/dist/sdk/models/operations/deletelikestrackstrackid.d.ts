import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DeleteLikesTracksTrackIdSecurity extends SpeakeasyBase {
    authHeader: string;
}
export declare class DeleteLikesTracksTrackIdRequest extends SpeakeasyBase {
    /**
     * SoundCloud Track id
     */
    trackId: number;
}
export declare class DeleteLikesTracksTrackIdResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Bad Request
     */
    error?: shared.ErrorT;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
