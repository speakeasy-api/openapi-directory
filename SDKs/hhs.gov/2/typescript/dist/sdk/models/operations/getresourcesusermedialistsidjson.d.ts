import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetResourcesUserMediaListsIdJsonRequest extends SpeakeasyBase {
    /**
     * Method used to render an html request. Accepts one: [mv, list, feed]
     */
    displayMethod?: string;
    /**
     * The id of the record to look up
     */
    id: number;
}
export declare class GetResourcesUserMediaListsIdJsonResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Get a specific user media list by 'id'.
     */
    mediaItemWrappeds?: shared.MediaItemWrapped[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
