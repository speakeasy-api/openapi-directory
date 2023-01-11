package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Image
 * An uploaded image. The resource for ImagesService.
**/
public class Image {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public Image withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sha1")
    public String sha1;
    public Image withSha1(String sha1) {
        this.sha1 = sha1;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sha256")
    public String sha256;
    public Image withSha256(String sha256) {
        this.sha256 = sha256;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public Image withUrl(String url) {
        this.url = url;
        return this;
    }
}