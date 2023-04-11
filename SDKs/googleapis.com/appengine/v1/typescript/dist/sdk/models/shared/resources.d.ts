import { SpeakeasyBase } from "../../../internal/utils";
import { Volume } from "./volume";
/**
 * Machine resources for a version.
 */
export declare class Resources extends SpeakeasyBase {
    /**
     * Number of CPU cores needed.
     */
    cpu?: number;
    /**
     * Disk size (GB) needed.
     */
    diskGb?: number;
    /**
     * The name of the encryption key that is stored in Google Cloud KMS. Only should be used by Cloud Composer to encrypt the vm disk
     */
    kmsKeyReference?: string;
    /**
     * Memory (GB) needed.
     */
    memoryGb?: number;
    /**
     * User specified volumes.
     */
    volumes?: Volume[];
}
