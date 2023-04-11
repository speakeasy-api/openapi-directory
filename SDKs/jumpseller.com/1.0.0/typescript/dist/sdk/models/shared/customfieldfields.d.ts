import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Type of the Custom Field
 */
export declare enum CustomFieldFieldsTypeEnum {
    Text = "text",
    Selection = "selection",
    Input = "input"
}
export declare class CustomFieldFields extends SpeakeasyBase {
    /**
     * Unique identifier of the Custom Field
     */
    id?: number;
    /**
     * Label given to the Custom Field
     */
    label?: string;
    /**
     * Type of the Custom Field
     */
    type?: CustomFieldFieldsTypeEnum;
    /**
     * All the possible Values of the Custom Field (for type 'selection')
     */
    values?: string[];
}
