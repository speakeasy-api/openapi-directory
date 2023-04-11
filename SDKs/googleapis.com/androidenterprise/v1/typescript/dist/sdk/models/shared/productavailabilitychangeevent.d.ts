import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The new state of the product. This field will always be present.
 */
export declare enum ProductAvailabilityChangeEventAvailabilityStatusEnum {
    Unknown = "unknown",
    Available = "available",
    Removed = "removed",
    Unpublished = "unpublished"
}
/**
 * An event generated whenever a product's availability changes.
 */
export declare class ProductAvailabilityChangeEvent extends SpeakeasyBase {
    /**
     * The new state of the product. This field will always be present.
     */
    availabilityStatus?: ProductAvailabilityChangeEventAvailabilityStatusEnum;
    /**
     * The id of the product (e.g. "app:com.google.android.gm") for which the product availability changed. This field will always be present.
     */
    productId?: string;
}
