package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ViolatingResource
 * Information regarding any resource causing the vulnerability such as JavaScript sources, image, audio files, etc.
**/
public class ViolatingResource {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("contentType")
    public String contentType;
    public ViolatingResource withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resourceUrl")
    public String resourceUrl;
    public ViolatingResource withResourceUrl(String resourceUrl) {
        this.resourceUrl = resourceUrl;
        return this;
    }
}