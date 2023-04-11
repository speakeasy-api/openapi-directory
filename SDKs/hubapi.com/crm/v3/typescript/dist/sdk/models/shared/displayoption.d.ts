import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The type of status.
 */
export declare enum DisplayOptionTypeEnum {
    Default = "DEFAULT",
    Success = "SUCCESS",
    Warning = "WARNING",
    Danger = "DANGER",
    Info = "INFO"
}
/**
 * Option definition for STATUS dataTypes.
 */
export declare class DisplayOption extends SpeakeasyBase {
    /**
     * The text that will be displayed to users for this option.
     */
    label: string;
    /**
     * JSON-friendly unique name for option.
     */
    name: string;
    /**
     * The type of status.
     */
    type: DisplayOptionTypeEnum;
}
