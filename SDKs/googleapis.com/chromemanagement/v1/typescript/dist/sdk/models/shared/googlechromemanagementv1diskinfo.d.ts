import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Status of the single storage device.
 */
export declare class GoogleChromeManagementV1DiskInfo extends SpeakeasyBase {
    /**
     * Output only. Number of bytes read since last boot.
     */
    bytesReadThisSession?: string;
    /**
     * Output only. Number of bytes written since last boot.
     */
    bytesWrittenThisSession?: string;
    /**
     * Output only. Time spent discarding since last boot. Discarding is writing to clear blocks which are no longer in use. Supported on kernels 4.18+.
     */
    discardTimeThisSession?: string;
    /**
     * Output only. Disk health.
     */
    health?: string;
    /**
     * Output only. Counts the time the disk and queue were busy, so unlike the fields above, parallel requests are not counted multiple times.
     */
    ioTimeThisSession?: string;
    /**
     * Output only. Disk manufacturer.
     */
    manufacturer?: string;
    /**
     * Output only. Disk model.
     */
    model?: string;
    /**
     * Output only. Time spent reading from disk since last boot.
     */
    readTimeThisSession?: string;
    /**
     * Output only. Disk serial number.
     */
    serialNumber?: string;
    /**
     * Output only. Disk size.
     */
    sizeBytes?: string;
    /**
     * Output only. Disk type: eMMC / NVMe / ATA / SCSI.
     */
    type?: string;
    /**
     * Output only. Disk volumes.
     */
    volumeIds?: string[];
    /**
     * Output only. Time spent writing to disk since last boot.
     */
    writeTimeThisSession?: string;
}
