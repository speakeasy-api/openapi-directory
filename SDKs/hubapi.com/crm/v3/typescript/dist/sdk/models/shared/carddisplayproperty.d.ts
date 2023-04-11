import { SpeakeasyBase } from "../../../internal/utils";
import { DisplayOption } from "./displayoption";
/**
 * Type of data represented by this property.
 */
export declare enum CardDisplayPropertyDataTypeEnum {
    Boolean = "BOOLEAN",
    Currency = "CURRENCY",
    Date = "DATE",
    Datetime = "DATETIME",
    Email = "EMAIL",
    Link = "LINK",
    Numeric = "NUMERIC",
    String = "STRING",
    Status = "STATUS"
}
/**
 * Definition for a card display property.
 */
export declare class CardDisplayProperty extends SpeakeasyBase {
    /**
     * Type of data represented by this property.
     */
    dataType: CardDisplayPropertyDataTypeEnum;
    /**
     * The label for this property as you'd like it displayed to users.
     */
    label: string;
    /**
     * An internal identifier for this property. This value must be unique TODO.
     */
    name: string;
    /**
     * An array of available options that can be displayed. Only used in when `dataType` is `STATUS`.
     */
    options: DisplayOption[];
}
