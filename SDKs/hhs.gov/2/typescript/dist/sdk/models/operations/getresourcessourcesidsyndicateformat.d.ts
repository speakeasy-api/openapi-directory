import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetResourcesSourcesIdSyndicateFormatRequest extends SpeakeasyBase {
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
export declare class GetResourcesSourcesIdSyndicateFormatResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Renders the list of MediaItems associated with the Source identified by the 'id'.
     */
    mediaItemWrappeds?: shared.MediaItemWrapped[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
