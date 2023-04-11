import { SpeakeasyBase } from "../../../internal/utils";
import { FileReference } from "./filereference";
/**
 * An opaque binary blob file to install on the device before the test starts.
 */
export declare class ObbFile extends SpeakeasyBase {
    /**
     * A reference to a file, used for user inputs.
     */
    obb?: FileReference;
    /**
     * Required. OBB file name which must conform to the format as specified by Android e.g. [main|patch].0300110.com.example.android.obb which will be installed into \/Android/obb/\/ on the device.
     */
    obbFileName?: string;
}
