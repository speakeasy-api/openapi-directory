import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetResourcesMediaIdContentRequest extends SpeakeasyBase {
    /**
     * The method that called this method
     */
    calledByBuild?: boolean;
    /**
     * The id of the media to show content for.
     */
    id: number;
}
export declare class GetResourcesMediaIdContentResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Returns the raw content (html, image, etc...) for the MediaItem identified by the 'id'.
     */
    getResourcesMediaIdContent200ApplicationJSONString?: string;
}
