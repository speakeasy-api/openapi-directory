import { SpeakeasyBase } from "../../../internal/utils";
export declare class Seller extends SpeakeasyBase {
    /**
     * The unique id for the seller. The seller fills in this field. The seller account id is then available to buyer in the product.
     */
    accountId?: string;
    /**
     * Optional sub-account id for the seller.
     */
    subAccountId?: string;
}
