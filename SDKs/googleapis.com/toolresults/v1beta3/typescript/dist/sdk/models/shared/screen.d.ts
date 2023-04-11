import { SpeakeasyBase } from "../../../internal/utils";
export declare class Screen extends SpeakeasyBase {
    /**
     * File reference of the png file. Required.
     */
    fileReference?: string;
    /**
     * Locale of the device that the screenshot was taken on. Required.
     */
    locale?: string;
    /**
     * Model of the device that the screenshot was taken on. Required.
     */
    model?: string;
    /**
     * OS version of the device that the screenshot was taken on. Required.
     */
    version?: string;
}
