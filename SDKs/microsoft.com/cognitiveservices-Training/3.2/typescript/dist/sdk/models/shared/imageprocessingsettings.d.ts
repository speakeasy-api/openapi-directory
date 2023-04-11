import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents image preprocessing settings used by image augmentation.
 */
export declare class ImageProcessingSettings extends SpeakeasyBase {
    /**
     * Gets or sets enabled image transforms. The key corresponds to the transform name. If value is set to true, then correspondent transform is enabled. Otherwise this transform will not be used.
     *
     * @remarks
     * Augmentation will be uniformly distributed among enabled transforms.
     */
    augmentationMethods?: Record<string, boolean>;
}
