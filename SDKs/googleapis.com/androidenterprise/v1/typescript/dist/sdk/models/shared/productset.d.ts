import { SpeakeasyBase } from "../../../internal/utils";
import { ProductVisibility } from "./productvisibility";
/**
 * The interpretation of this product set. "unknown" should never be sent and is ignored if received. "whitelist" means that the user is entitled to access the product set. "includeAll" means that all products are accessible, including products that are approved, products with revoked approval, and products that have never been approved. "allApproved" means that the user is entitled to access all products that are approved for the enterprise. If the value is "allApproved" or "includeAll", the productId field is ignored. If no value is provided, it is interpreted as "whitelist" for backwards compatibility. Further "allApproved" or "includeAll" does not enable automatic visibility of "alpha" or "beta" tracks for Android app. Use ProductVisibility to enable "alpha" or "beta" tracks per user.
 */
export declare enum ProductSetProductSetBehaviorEnum {
    Unknown = "unknown",
    Whitelist = "whitelist",
    IncludeAll = "includeAll",
    AllApproved = "allApproved"
}
/**
 * A set of products.
 */
export declare class ProductSet extends SpeakeasyBase {
    /**
     * The list of product IDs making up the set of products.
     */
    productId?: string[];
    /**
     * The interpretation of this product set. "unknown" should never be sent and is ignored if received. "whitelist" means that the user is entitled to access the product set. "includeAll" means that all products are accessible, including products that are approved, products with revoked approval, and products that have never been approved. "allApproved" means that the user is entitled to access all products that are approved for the enterprise. If the value is "allApproved" or "includeAll", the productId field is ignored. If no value is provided, it is interpreted as "whitelist" for backwards compatibility. Further "allApproved" or "includeAll" does not enable automatic visibility of "alpha" or "beta" tracks for Android app. Use ProductVisibility to enable "alpha" or "beta" tracks per user.
     */
    productSetBehavior?: ProductSetProductSetBehaviorEnum;
    /**
     * Additional list of product IDs making up the product set. Unlike the productID array, in this list It's possible to specify which tracks (alpha, beta, production) of a product are visible to the user. See ProductVisibility and its fields for more information. Specifying the same product ID both here and in the productId array is not allowed and it will result in an error.
     */
    productVisibility?: ProductVisibility[];
}
