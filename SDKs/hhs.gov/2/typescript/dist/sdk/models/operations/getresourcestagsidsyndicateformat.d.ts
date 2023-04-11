import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetResourcesTagsIdSyndicateFormatRequest extends SpeakeasyBase {
    /**
     * Method used to render an html request. Accepts one: [mv, list, feed]
     */
    displayMethod?: string;
    /**
     * Automatically added
     */
    format: string;
    /**
     * The id of the record to look up
     */
    id: number;
}
export declare class GetResourcesTagsIdSyndicateFormatResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Renders the list of MediaItems associated with the Tag identified by the 'id'.
     */
    getResourcesTagsIdSyndicateFormat200ApplicationJSONString?: string;
}
