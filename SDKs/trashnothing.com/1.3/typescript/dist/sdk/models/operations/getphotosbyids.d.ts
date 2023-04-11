import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetPhotosByIdsRequest extends SpeakeasyBase {
    /**
     * Client device pixel ratio used to determine thumbnail size (default 1.0).
     */
    devicePixelRatio?: number;
    /**
     * The IDs of the photos to retrieve.  If more than 50 photo IDs are passed, only the first 50 photos will be returned.
     */
    photoIds: string;
}
export declare class GetPhotosByIdsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * The photos.
     */
    photoResults?: shared.PhotoResult[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
