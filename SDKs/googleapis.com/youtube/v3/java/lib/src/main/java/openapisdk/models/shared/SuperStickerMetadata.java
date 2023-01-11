package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SuperStickerMetadata {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("altText")
    public String altText;
    public SuperStickerMetadata withAltText(String altText) {
        this.altText = altText;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("altTextLanguage")
    public String altTextLanguage;
    public SuperStickerMetadata withAltTextLanguage(String altTextLanguage) {
        this.altTextLanguage = altTextLanguage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("stickerId")
    public String stickerId;
    public SuperStickerMetadata withStickerId(String stickerId) {
        this.stickerId = stickerId;
        return this;
    }
}