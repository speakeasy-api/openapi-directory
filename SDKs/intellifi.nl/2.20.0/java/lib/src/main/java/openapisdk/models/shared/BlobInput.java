package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class BlobInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("blob_key")
    public String blobKey;
    public BlobInput withBlobKey(String blobKey) {
        this.blobKey = blobKey;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("content_type")
    public String contentType;
    public BlobInput withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("filename")
    public String filename;
    public BlobInput withFilename(String filename) {
        this.filename = filename;
        return this;
    }
}