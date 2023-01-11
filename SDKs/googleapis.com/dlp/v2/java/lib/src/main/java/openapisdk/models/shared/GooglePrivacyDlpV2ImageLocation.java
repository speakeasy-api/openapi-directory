package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GooglePrivacyDlpV2ImageLocation
 * Location of the finding within an image.
**/
public class GooglePrivacyDlpV2ImageLocation {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("boundingBoxes")
    public GooglePrivacyDlpV2BoundingBox[] boundingBoxes;
    public GooglePrivacyDlpV2ImageLocation withBoundingBoxes(GooglePrivacyDlpV2BoundingBox[] boundingBoxes) {
        this.boundingBoxes = boundingBoxes;
        return this;
    }
}