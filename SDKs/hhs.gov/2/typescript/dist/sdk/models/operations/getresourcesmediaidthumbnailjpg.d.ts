import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetResourcesMediaIdThumbnailJpgRequest extends SpeakeasyBase {
    /**
     * The id of the media to get a thumbnail for.
     */
    id: number;
}
export declare class GetResourcesMediaIdThumbnailJpgResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Returns the JPG thumbnail, where applicable, for the MediaItem identified by the 'id'.
     */
    getResourcesMediaIdThumbnailJpg200ApplicationJSONObject?: Record<string, any>;
}
