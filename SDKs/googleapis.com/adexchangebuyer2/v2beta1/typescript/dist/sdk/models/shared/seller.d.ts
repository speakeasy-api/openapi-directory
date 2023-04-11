import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents a seller of inventory. Each seller is identified by a unique Ad Manager account ID.
 */
export declare class Seller extends SpeakeasyBase {
    /**
     * The unique ID for the seller. The seller fills in this field. The seller account ID is then available to buyer in the product.
     */
    accountId?: string;
    /**
     * Output only. Ad manager network code for the seller.
     */
    subAccountId?: string;
}
/**
 * Represents a seller of inventory. Each seller is identified by a unique Ad Manager account ID.
 */
export declare class SellerInput extends SpeakeasyBase {
    /**
     * The unique ID for the seller. The seller fills in this field. The seller account ID is then available to buyer in the product.
     */
    accountId?: string;
}
