import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetResourcesMediaIdYoutubeMetaDataJsonRequest extends SpeakeasyBase {
    /**
     * The id of the video to show meta data for.
     */
    id: number;
}
/**
 * Returns the Youtube metadata, where applicable, for the MediaItem identified by the 'id'.
 */
export declare class GetResourcesMediaIdYoutubeMetaDataJson200ApplicationJSON extends SpeakeasyBase {
    callback?: string;
    meta?: shared.Meta;
    results?: Record<string, any>[];
}
export declare class GetResourcesMediaIdYoutubeMetaDataJsonResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Returns the Youtube metadata, where applicable, for the MediaItem identified by the 'id'.
     */
    getResourcesMediaIdYoutubeMetaDataJSON200ApplicationJSONObject?: GetResourcesMediaIdYoutubeMetaDataJson200ApplicationJSON;
}
