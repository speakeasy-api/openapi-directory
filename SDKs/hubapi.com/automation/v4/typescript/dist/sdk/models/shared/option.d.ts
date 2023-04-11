import { SpeakeasyBase } from "../../../internal/utils";
/**
 * An option for a field value.
 */
export declare class Option extends SpeakeasyBase {
    description: string;
    displayOrder: number;
    doubleData: number;
    hidden: boolean;
    /**
     * The user-facing label for the option.
     */
    label: string;
    readOnly: boolean;
    /**
     * The internal value for the option. This is what will be included in the execution request to the `actionUrl`.
     */
    value: string;
}
