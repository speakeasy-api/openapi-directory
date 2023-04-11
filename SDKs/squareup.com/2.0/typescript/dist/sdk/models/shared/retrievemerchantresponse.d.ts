import { SpeakeasyBase } from "../../../internal/utils";
import { ErrorT } from "./error";
import { Merchant } from "./merchant";
/**
 * The response object returned by the [RetrieveMerchant](https://developer.squareup.com/reference/square_2021-08-18/merchants-api/retrieve-merchant) endpoint.
 */
export declare class RetrieveMerchantResponse extends SpeakeasyBase {
    /**
     * Information on errors encountered during the request.
     */
    errors?: ErrorT[];
    /**
     * Represents a Square seller.
     */
    merchant?: Merchant;
}
