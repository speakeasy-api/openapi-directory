import { SpeakeasyBase } from "../../../internal/utils";
import { ProductOption } from "./productoption";
import { Variant } from "./variant";
export declare class ProductOptionValueFields extends SpeakeasyBase {
    /**
     * Unique identifier of the product option value
     */
    id?: number;
    /**
     * Name of the product option value
     */
    name?: string;
    /**
     * Position of the product option value
     */
    position?: number;
    productOption?: ProductOption;
    variants?: Variant[];
}
