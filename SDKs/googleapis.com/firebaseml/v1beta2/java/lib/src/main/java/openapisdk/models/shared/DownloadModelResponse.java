package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DownloadModelResponse
 * The response for downloading a model to device.
**/
public class DownloadModelResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("downloadUri")
    public String downloadUri;
    public DownloadModelResponse withDownloadUri(String downloadUri) {
        this.downloadUri = downloadUri;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("expireTime")
    public String expireTime;
    public DownloadModelResponse withExpireTime(String expireTime) {
        this.expireTime = expireTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("modelFormat")
    public DownloadModelResponseModelFormatEnum modelFormat;
    public DownloadModelResponse withModelFormat(DownloadModelResponseModelFormatEnum modelFormat) {
        this.modelFormat = modelFormat;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sizeBytes")
    public String sizeBytes;
    public DownloadModelResponse withSizeBytes(String sizeBytes) {
        this.sizeBytes = sizeBytes;
        return this;
    }
}