import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class KkidWishlistPutRequest extends SpeakeasyBase {
    /**
     * Item Description
     */
    description?: string;
    /**
     * URL Link to item
     */
    link?: string;
    /**
     * Item Priority
     */
    priority?: number;
    /**
     * Item title
     */
    title?: string;
    /**
     * Wish list item ID to update
     */
    wishId: number;
}
export declare class KkidWishlistPutResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * search results matching criteria
     */
    success?: shared.Success;
}
