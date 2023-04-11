import { SpeakeasyBase } from "../../../internal/utils";
import { Detection } from "./detection";
/**
 * A signature corresponding to memory page hashes.
 */
export declare class MemoryHashSignature extends SpeakeasyBase {
    /**
     * The binary family.
     */
    binaryFamily?: string;
    /**
     * The list of memory hash detections contributing to the binary family match.
     */
    detections?: Detection[];
}
