import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DeleteTracksTrackIdSecurity extends SpeakeasyBase {
    authHeader: string;
}
export declare class DeleteTracksTrackIdRequest extends SpeakeasyBase {
    /**
     * SoundCloud Track id
     */
    trackId: number;
}
export declare class DeleteTracksTrackIdResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Not Found
     */
    error?: shared.ErrorT;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
