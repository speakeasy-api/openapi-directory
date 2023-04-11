import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Type of browser window for which the backup image of the flash creative can be displayed.
 */
export declare enum TargetWindowTargetWindowOptionEnum {
    NewWindow = "NEW_WINDOW",
    CurrentWindow = "CURRENT_WINDOW",
    Custom = "CUSTOM"
}
/**
 * Target Window.
 */
export declare class TargetWindow extends SpeakeasyBase {
    /**
     * User-entered value.
     */
    customHtml?: string;
    /**
     * Type of browser window for which the backup image of the flash creative can be displayed.
     */
    targetWindowOption?: TargetWindowTargetWindowOptionEnum;
}
