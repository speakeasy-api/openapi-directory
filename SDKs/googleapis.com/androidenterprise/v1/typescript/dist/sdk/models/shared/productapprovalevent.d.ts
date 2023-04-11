import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Whether the product was approved or unapproved. This field will always be present.
 */
export declare enum ProductApprovalEventApprovedEnum {
    Unknown = "unknown",
    Approved = "approved",
    Unapproved = "unapproved"
}
/**
 * An event generated when a product's approval status is changed.
 */
export declare class ProductApprovalEvent extends SpeakeasyBase {
    /**
     * Whether the product was approved or unapproved. This field will always be present.
     */
    approved?: ProductApprovalEventApprovedEnum;
    /**
     * The id of the product (e.g. "app:com.google.android.gm") for which the approval status has changed. This field will always be present.
     */
    productId?: string;
}
