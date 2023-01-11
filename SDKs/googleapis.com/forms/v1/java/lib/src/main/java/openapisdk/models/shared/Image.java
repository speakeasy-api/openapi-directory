package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Image
 * Data representing an image.
**/
public class Image {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("altText")
    public String altText;
    public Image withAltText(String altText) {
        this.altText = altText;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("contentUri")
    public String contentUri;
    public Image withContentUri(String contentUri) {
        this.contentUri = contentUri;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("properties")
    public MediaProperties properties;
    public Image withProperties(MediaProperties properties) {
        this.properties = properties;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sourceUri")
    public String sourceUri;
    public Image withSourceUri(String sourceUri) {
        this.sourceUri = sourceUri;
        return this;
    }
}