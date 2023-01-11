package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ImageInput
 * Data representing an image.
**/
public class ImageInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("altText")
    public String altText;
    public ImageInput withAltText(String altText) {
        this.altText = altText;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("properties")
    public MediaProperties properties;
    public ImageInput withProperties(MediaProperties properties) {
        this.properties = properties;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sourceUri")
    public String sourceUri;
    public ImageInput withSourceUri(String sourceUri) {
        this.sourceUri = sourceUri;
        return this;
    }
}