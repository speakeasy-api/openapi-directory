import { SpeakeasyBase } from "../../../internal/utils";
import { FileReference } from "./filereference";
/**
 * A file or directory to install on the device before the test starts.
 */
export declare class IosDeviceFile extends SpeakeasyBase {
    /**
     * The bundle id of the app where this file lives. iOS apps sandbox their own filesystem, so app files must specify which app installed on the device.
     */
    bundleId?: string;
    /**
     * A reference to a file, used for user inputs.
     */
    content?: FileReference;
    /**
     * Location of the file on the device, inside the app's sandboxed filesystem
     */
    devicePath?: string;
}
