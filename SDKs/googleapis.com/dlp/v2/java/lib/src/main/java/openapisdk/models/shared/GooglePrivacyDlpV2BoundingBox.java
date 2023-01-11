package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GooglePrivacyDlpV2BoundingBox
 * Bounding box encompassing detected text within an image.
**/
public class GooglePrivacyDlpV2BoundingBox {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("height")
    public Integer height;
    public GooglePrivacyDlpV2BoundingBox withHeight(Integer height) {
        this.height = height;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("left")
    public Integer left;
    public GooglePrivacyDlpV2BoundingBox withLeft(Integer left) {
        this.left = left;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("top")
    public Integer top;
    public GooglePrivacyDlpV2BoundingBox withTop(Integer top) {
        this.top = top;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("width")
    public Integer width;
    public GooglePrivacyDlpV2BoundingBox withWidth(Integer width) {
        this.width = width;
        return this;
    }
}