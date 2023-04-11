import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Type of the product option
 */
export declare enum ProductOptionEditFieldsOptionTypeEnum {
    Option = "option",
    Input = "input",
    Text = "text",
    File = "file"
}
export declare class ProductOptionEditFields extends SpeakeasyBase {
    /**
     * Name of the product option
     */
    name?: string;
    /**
     * Type of the product option
     */
    optionType?: ProductOptionEditFieldsOptionTypeEnum;
    /**
     * Position of the product option
     */
    position?: number;
}
