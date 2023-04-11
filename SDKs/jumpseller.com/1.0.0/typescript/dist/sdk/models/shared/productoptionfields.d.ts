import { SpeakeasyBase } from "../../../internal/utils";
import { ProductOptionValueFields } from "./productoptionvaluefields";
/**
 * Type of the product option
 */
export declare enum ProductOptionFieldsOptionTypeEnum {
    Option = "option",
    Input = "input",
    Text = "text",
    File = "file"
}
export declare class ProductOptionFields extends SpeakeasyBase {
    /**
     * Unique identifier of the product option
     */
    id?: number;
    /**
     * Name of the product option
     */
    name?: string;
    /**
     * Type of the product option
     */
    optionType?: ProductOptionFieldsOptionTypeEnum;
    /**
     * Position of the product option
     */
    position?: number;
    values?: ProductOptionValueFields[];
}
