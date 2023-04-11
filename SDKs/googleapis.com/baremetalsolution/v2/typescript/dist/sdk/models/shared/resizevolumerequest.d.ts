import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Request for emergency resize Volume.
 */
export declare class ResizeVolumeRequest extends SpeakeasyBase {
    /**
     * New Volume size, in GiB.
     */
    sizeGib?: string;
}
