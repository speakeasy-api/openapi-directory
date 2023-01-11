package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Image
 * Describe image data.
**/
public class Image {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public String data;
    public Image withData(String data) {
        this.data = data;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mimeType")
    public String mimeType;
    public Image withMimeType(String mimeType) {
        this.mimeType = mimeType;
        return this;
    }
}