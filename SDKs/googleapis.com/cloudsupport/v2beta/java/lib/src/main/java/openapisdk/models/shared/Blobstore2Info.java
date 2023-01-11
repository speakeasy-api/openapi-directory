package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Blobstore2Info
 * # gdata.* are outside protos with mising documentation
**/
public class Blobstore2Info {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("blobGeneration")
    public String blobGeneration;
    public Blobstore2Info withBlobGeneration(String blobGeneration) {
        this.blobGeneration = blobGeneration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("blobId")
    public String blobId;
    public Blobstore2Info withBlobId(String blobId) {
        this.blobId = blobId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("downloadReadHandle")
    public String downloadReadHandle;
    public Blobstore2Info withDownloadReadHandle(String downloadReadHandle) {
        this.downloadReadHandle = downloadReadHandle;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("readToken")
    public String readToken;
    public Blobstore2Info withReadToken(String readToken) {
        this.readToken = readToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("uploadMetadataContainer")
    public String uploadMetadataContainer;
    public Blobstore2Info withUploadMetadataContainer(String uploadMetadataContainer) {
        this.uploadMetadataContainer = uploadMetadataContainer;
        return this;
    }
}