import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class KkidWishlistGetRequest extends SpeakeasyBase {
    /**
     * userID of the kid
     */
    kidUserId?: number;
}
export declare class KkidWishlistGetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * search results matching criteria
     */
    wishlist?: shared.Wishlist;
}
