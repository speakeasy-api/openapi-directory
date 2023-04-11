import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Initialization parameters for creating a new disk.
 */
export declare class NewDiskInitializeParams extends SpeakeasyBase {
    /**
     * The size of the created disk in gigabytes.
     */
    diskSizeGb?: string;
    /**
     * Name of the disk type resource describing which disk type to use to create the disk. For example 'pd-ssd' or 'pd-standard'. Default is 'pd-standard'
     */
    diskType?: string;
    /**
     * The name or fully-qualified URL of a source image to use to create this disk. If you provide a name of the source image, Replica Pool will look for an image with that name in your project. If you are specifying an image provided by Compute Engine, you will need to provide the full URL with the correct project, such as:
     *
     * @remarks
     * http://www.googleapis.com/compute/v1/projects/debian-cloud/ global/images/debian-wheezy-7-vYYYYMMDD
     */
    sourceImage?: string;
}
