import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleChromeManagementV1TouchScreenDevice } from "./googlechromemanagementv1touchscreendevice";
/**
 * Information on the device touch screen.
 */
export declare class GoogleChromeManagementV1TouchScreenInfo extends SpeakeasyBase {
    /**
     * Output only. List of the internal touch screen devices.
     */
    devices?: GoogleChromeManagementV1TouchScreenDevice[];
    /**
     * Output only. Touchpad library name used by the input stack.
     */
    touchpadLibrary?: string;
}
