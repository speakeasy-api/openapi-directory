import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Success
 */
export declare class CustomField extends SpeakeasyBase {
    /**
     * Datetime of when the Custom Field was created
     */
    createdAt?: Date;
    /**
     * Type of the Custom Field. Value must be one of: person, company, opportunity.
     */
    fieldType?: string;
    /**
     * ID of Custom Field
     */
    id?: number;
    /**
     * Name of the Custom Field
     */
    name?: string;
    /**
     * Datetime of when the Custom Field was last updated
     */
    updatedAt?: Date;
    /**
     * Value Type of the Custom Field. Value must be one of: text, date.
     */
    valueType?: string;
}
