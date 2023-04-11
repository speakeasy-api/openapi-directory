import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Representation of a license assignment.
 */
export declare class LicenseAssignment extends SpeakeasyBase {
    /**
     * ETag of the resource.
     */
    etags?: string;
    /**
     * Identifies the resource as a LicenseAssignment, which is `licensing#licenseAssignment`.
     */
    kind?: string;
    /**
     * A product's unique identifier. For more information about products in this version of the API, see Product and SKU IDs.
     */
    productId?: string;
    /**
     * Display Name of the product.
     */
    productName?: string;
    /**
     * Link to this page.
     */
    selfLink?: string;
    /**
     * A product SKU's unique identifier. For more information about available SKUs in this version of the API, see Products and SKUs.
     */
    skuId?: string;
    /**
     * Display Name of the sku of the product.
     */
    skuName?: string;
    /**
     * The user's current primary email address. If the user's email address changes, use the new email address in your API requests. Since a `userId` is subject to change, do not use a `userId` value as a key for persistent data. This key could break if the current user's email address changes. If the `userId` is suspended, the license status changes.
     */
    userId?: string;
}
