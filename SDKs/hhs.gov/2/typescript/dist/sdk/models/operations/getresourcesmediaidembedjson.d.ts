import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetResourcesMediaIdEmbedJsonRequest extends SpeakeasyBase {
    /**
     * Method used to render an html request. Accepts one: [mv, list, feed]
     */
    displayMethod?: string;
    /**
     * Should the div to insert content into have a specific name?
     */
    divId?: string;
    /**
     * Should the div to insert content into be omitted?
     */
    excludeDiv?: boolean;
    /**
     * Should a reference to the JQuery Library be omitted?
     */
    excludeJquery?: boolean;
    /**
     * Currently supports 'iframe', defaults to 'javascript'.
     */
    flavor?: string;
    /**
     * The height of the generated iframe.
     */
    height?: number;
    /**
     * The id of the media to get embed code for.
     */
    id: number;
    /**
     * The name of the iframe element
     */
    iframeName?: string;
    /**
     * The width of the generated iframe.
     */
    width?: number;
}
export declare class GetResourcesMediaIdEmbedJsonResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Returns the javascript or iframe embed code for the MediaItem identified by 'id'.
     */
    getResourcesMediaIdEmbedJSON200ApplicationJSONString?: string;
}
