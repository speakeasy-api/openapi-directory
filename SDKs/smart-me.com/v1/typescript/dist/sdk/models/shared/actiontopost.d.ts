import { SpeakeasyBase } from "../../../internal/utils";
import { ActionToPostItem } from "./actiontopostitem";
/**
 * Container Class for an action to post
 */
export declare class ActionToPost extends SpeakeasyBase {
    /**
     * List with all Actions for this device
     */
    actions?: ActionToPostItem[];
    /**
     * The ID of the Device
     */
    deviceID?: string;
}
