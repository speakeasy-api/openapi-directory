import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetResourcesMediaFeaturedJsonRequest extends SpeakeasyBase {
    /**
     * The maximum number of records to return
     */
    max?: number;
    /**
     * Return records starting at the offset index.
     */
    offset?: number;
    /**
     * The name of the property to which sorting will be applied
     */
    sort?: string;
}
export declare class GetResourcesMediaFeaturedJsonResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Get the list of featured content in the syndication system
     */
    mediaItems?: shared.MediaItem[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
