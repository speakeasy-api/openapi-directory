package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GdataBlobstore2Info
 * gdata
**/
public class GdataBlobstore2Info {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("blobGeneration")
    public String blobGeneration;
    public GdataBlobstore2Info withBlobGeneration(String blobGeneration) {
        this.blobGeneration = blobGeneration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("blobId")
    public String blobId;
    public GdataBlobstore2Info withBlobId(String blobId) {
        this.blobId = blobId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("downloadReadHandle")
    public String downloadReadHandle;
    public GdataBlobstore2Info withDownloadReadHandle(String downloadReadHandle) {
        this.downloadReadHandle = downloadReadHandle;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("readToken")
    public String readToken;
    public GdataBlobstore2Info withReadToken(String readToken) {
        this.readToken = readToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("uploadMetadataContainer")
    public String uploadMetadataContainer;
    public GdataBlobstore2Info withUploadMetadataContainer(String uploadMetadataContainer) {
        this.uploadMetadataContainer = uploadMetadataContainer;
        return this;
    }
}