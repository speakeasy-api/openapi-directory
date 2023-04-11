import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Definition of a custom Compute Engine virtual machine image for starting a notebook instance with the environment installed directly on the VM.
 */
export declare class VmImage extends SpeakeasyBase {
    /**
     * Use this VM image family to find the image; the newest image in this family will be used.
     */
    imageFamily?: string;
    /**
     * Use VM image name to find the image.
     */
    imageName?: string;
    /**
     * Required. The name of the Google Cloud project that this VM image belongs to. Format: `{project_id}`
     */
    project?: string;
}
