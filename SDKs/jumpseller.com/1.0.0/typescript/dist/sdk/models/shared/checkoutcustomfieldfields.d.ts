import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Area of the CheckoutCustomField
 */
export declare enum CheckoutCustomFieldFieldsAreaEnum {
    Contact = "contact",
    BillingShipping = "billing_shipping",
    Other = "other"
}
/**
 * Type of the CheckoutCustomField
 */
export declare enum CheckoutCustomFieldFieldsTypeEnum {
    Text = "text",
    Select = "select",
    Input = "input",
    Checkbox = "checkbox"
}
export declare class CheckoutCustomFieldFields extends SpeakeasyBase {
    /**
     * Area of the CheckoutCustomField
     */
    area?: CheckoutCustomFieldFieldsAreaEnum;
    /**
     * The values for the CheckoutCustomField selection
     */
    customFieldSelectOptions?: string[];
    /**
     * True if the CheckoutCustomField can be removed from the store
     */
    deletable?: boolean;
    /**
     * Unique identifier of the CheckoutCustomField
     */
    id?: number;
    /**
     * Label given to the CheckoutCustomField
     */
    label?: string;
    /**
     * Position of the CheckoutCustomField
     */
    position?: number;
    /**
     * True if the CheckoutCustomField is mandatory
     */
    required?: boolean;
    /**
     * Type of the CheckoutCustomField
     */
    type?: CheckoutCustomFieldFieldsTypeEnum;
}
