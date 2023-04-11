import { SpeakeasyBase } from "../../../internal/utils";
import { ObbFile } from "./obbfile";
import { RegularFile } from "./regularfile";
/**
 * A single device file description.
 */
export declare class DeviceFile extends SpeakeasyBase {
    /**
     * An opaque binary blob file to install on the device before the test starts.
     */
    obbFile?: ObbFile;
    /**
     * A file or directory to install on the device before the test starts.
     */
    regularFile?: RegularFile;
}
