import { SpeakeasyBase } from "../../../internal/utils";
import { DeviceErrorInfo } from "./deviceerrorinfo";
/**
 * Successful response
 */
export declare class CheckPushResponse extends SpeakeasyBase {
    /**
     * Object with device errors
     */
    deviceErrors?: Record<string, DeviceErrorInfo>;
    duration: string;
    /**
     * List of general errors
     */
    generalErrors?: string[];
    renderedApnTemplate?: string;
    renderedFirebaseTemplate?: string;
    renderedMessage?: Record<string, string>;
    /**
     * Don't require existing devices to render templates
     */
    skipDevices?: boolean;
}
