package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class FileInfo {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mimeType")
    public String mimeType;
    public FileInfo withMimeType(String mimeType) {
        this.mimeType = mimeType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sha1Sum")
    public String sha1Sum;
    public FileInfo withSha1Sum(String sha1Sum) {
        this.sha1Sum = sha1Sum;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sourceUrl")
    public String sourceUrl;
    public FileInfo withSourceUrl(String sourceUrl) {
        this.sourceUrl = sourceUrl;
        return this;
    }
}