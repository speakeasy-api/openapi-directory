import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetResourcesMediaIdPreviewJpgRequest extends SpeakeasyBase {
    /**
     * The id of the media to get a preview for.
     */
    id: number;
}
export declare class GetResourcesMediaIdPreviewJpgResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Returns the JPG preview, where applicable, for the MediaItem identified by the 'id'.
     */
    getResourcesMediaIdPreviewJpg200ApplicationJSONObject?: Record<string, any>;
}
