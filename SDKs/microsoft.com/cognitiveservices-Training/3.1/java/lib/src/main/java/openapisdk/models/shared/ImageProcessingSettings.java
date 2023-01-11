package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import openapisdk.utils.SpeakeasyMetadata;

/**
 * ImageProcessingSettings
 * Represents image preprocessing settings used by image augmentation.
**/
public class ImageProcessingSettings {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("augmentationMethods")
@SpeakeasyMetadata("form:name=augmentationMethods")
    public java.util.Map<String, Boolean> augmentationMethods;
    public ImageProcessingSettings withAugmentationMethods(java.util.Map<String, Boolean> augmentationMethods) {
        this.augmentationMethods = augmentationMethods;
        return this;
    }
}