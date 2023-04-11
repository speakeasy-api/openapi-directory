import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class KkidWishlistPostRequest extends SpeakeasyBase {
    /**
     * Item Description
     */
    description?: string;
    /**
     * userID of the kid
     */
    kidUserId: number;
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
    title: string;
}
export declare class KkidWishlistPostResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * search results matching criteria
     */
    success?: shared.Success;
}
