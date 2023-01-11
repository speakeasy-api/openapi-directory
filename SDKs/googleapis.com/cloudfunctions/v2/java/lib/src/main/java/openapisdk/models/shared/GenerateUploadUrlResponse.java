package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GenerateUploadUrlResponse
 * Response of `GenerateSourceUploadUrl` method.
**/
public class GenerateUploadUrlResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("storageSource")
    public StorageSource storageSource;
    public GenerateUploadUrlResponse withStorageSource(StorageSource storageSource) {
        this.storageSource = storageSource;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("uploadUrl")
    public String uploadUrl;
    public GenerateUploadUrlResponse withUploadUrl(String uploadUrl) {
        this.uploadUrl = uploadUrl;
        return this;
    }
}