import { SpeakeasyBase } from "../../../internal/utils";
export declare class CustomAttribute extends SpeakeasyBase {
    /**
     * The name of the attribute. Underscores will be replaced by spaces upon insertion.
     */
    name?: string;
    /**
     * The type of the attribute. Acceptable values are: - "`boolean`" - "`datetimerange`" - "`float`" - "`group`" - "`int`" - "`price`" - "`text`" - "`time`" - "`url`"
     */
    type?: string;
    /**
     * Free-form unit of the attribute. Unit can only be used for values of type int, float, or price.
     */
    unit?: string;
    /**
     * The value of the attribute.
     */
    value?: string;
}
