import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Type of the Custom Field
 */
export declare enum CustomFieldEditFieldsTypeEnum {
    Text = "text",
    Selection = "selection",
    Input = "input"
}
export declare class CustomFieldEditFields extends SpeakeasyBase {
    /**
     * Label given to the Custom Field
     */
    label?: string;
    /**
     * Type of the Custom Field
     */
    type?: CustomFieldEditFieldsTypeEnum;
    /**
     * All the possible Values of the Custom Field (for type 'selection')
     */
    values?: string[];
}
