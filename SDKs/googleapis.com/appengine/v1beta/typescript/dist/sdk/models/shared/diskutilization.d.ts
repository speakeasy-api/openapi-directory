import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Target scaling by disk usage. Only applicable in the App Engine flexible environment.
 */
export declare class DiskUtilization extends SpeakeasyBase {
    /**
     * Target bytes read per second.
     */
    targetReadBytesPerSecond?: number;
    /**
     * Target ops read per seconds.
     */
    targetReadOpsPerSecond?: number;
    /**
     * Target bytes written per second.
     */
    targetWriteBytesPerSecond?: number;
    /**
     * Target ops written per second.
     */
    targetWriteOpsPerSecond?: number;
}
