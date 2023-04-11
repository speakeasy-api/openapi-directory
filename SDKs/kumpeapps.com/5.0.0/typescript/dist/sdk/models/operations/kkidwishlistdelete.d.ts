import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class KkidWishlistDeleteRequest extends SpeakeasyBase {
    /**
     * ID of wishlist item to delete
     */
    wishId: number;
}
export declare class KkidWishlistDeleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * search results matching criteria
     */
    success?: shared.Success;
}
