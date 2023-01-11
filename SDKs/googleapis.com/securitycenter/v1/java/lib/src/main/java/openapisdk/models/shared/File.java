package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * File
 * File information about the related binary/library used by an executable, or the script used by a script interpreter
**/
public class File {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("contents")
    public String contents;
    public File withContents(String contents) {
        this.contents = contents;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hashedSize")
    public String hashedSize;
    public File withHashedSize(String hashedSize) {
        this.hashedSize = hashedSize;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("partiallyHashed")
    public Boolean partiallyHashed;
    public File withPartiallyHashed(Boolean partiallyHashed) {
        this.partiallyHashed = partiallyHashed;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("path")
    public String path;
    public File withPath(String path) {
        this.path = path;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sha256")
    public String sha256;
    public File withSha256(String sha256) {
        this.sha256 = sha256;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("size")
    public String size;
    public File withSize(String size) {
        this.size = size;
        return this;
    }
}