import { SpeakeasyBase } from "../../../internal/utils";
import { CustomLabel } from "./customlabel";
/**
 * A dimension used to match products.
 */
export declare class ProductMatchDimension extends SpeakeasyBase {
    /**
     * The key and value of a custom label.
     */
    customLabel?: CustomLabel;
    /**
     * The ID of the product offer to match with a product with the same offer ID.
     */
    productOfferId?: string;
}
