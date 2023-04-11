import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Area of the CheckoutCustomField
 */
export declare enum CheckoutCustomFieldEditFieldsAreaEnum {
    Contact = "contact",
    BillingShipping = "billing_shipping",
    Other = "other"
}
/**
 * Type of the CheckoutCustomField
 */
export declare enum CheckoutCustomFieldEditFieldsTypeEnum {
    Text = "text",
    Select = "select",
    Input = "input",
    Checkbox = "checkbox",
    Date = "date"
}
export declare class CheckoutCustomFieldEditFields extends SpeakeasyBase {
    /**
     * Area of the CheckoutCustomField
     */
    area?: CheckoutCustomFieldEditFieldsAreaEnum;
    /**
     * The values for the CheckoutCustomField selection
     */
    customFieldSelectOptions?: string[];
    /**
     * True if the CheckoutCustomField can be removed from the store
     */
    deletable?: boolean;
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
    type?: CheckoutCustomFieldEditFieldsTypeEnum;
}
