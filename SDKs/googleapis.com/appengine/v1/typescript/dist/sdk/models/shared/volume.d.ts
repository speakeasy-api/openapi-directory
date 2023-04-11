import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Volumes mounted within the app container. Only applicable in the App Engine flexible environment.
 */
export declare class Volume extends SpeakeasyBase {
    /**
     * Unique name for the volume.
     */
    name?: string;
    /**
     * Volume size in gigabytes.
     */
    sizeGb?: number;
    /**
     * Underlying volume type, e.g. 'tmpfs'.
     */
    volumeType?: string;
}
