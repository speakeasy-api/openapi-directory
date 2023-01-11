package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * File
 * Represents a file in Poly, which can be a root, resource, or thumbnail file.
**/
public class File {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("contentType")
    public String contentType;
    public File withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("relativePath")
    public String relativePath;
    public File withRelativePath(String relativePath) {
        this.relativePath = relativePath;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public File withUrl(String url) {
        this.url = url;
        return this;
    }
}