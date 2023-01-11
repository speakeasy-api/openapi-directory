package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Media {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("account_id")
    public String accountId;
    public Media withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("etag")
    public String etag;
    public Media withEtag(String etag) {
        this.etag = etag;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public Media withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("max_downloads_allowed")
    public Long maxDownloadsAllowed;
    public Media withMaxDownloadsAllowed(Long maxDownloadsAllowed) {
        this.maxDownloadsAllowed = maxDownloadsAllowed;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("media_size")
    public Long mediaSize;
    public Media withMediaSize(Long mediaSize) {
        this.mediaSize = mediaSize;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("metadata_primary")
    public String metadataPrimary;
    public Media withMetadataPrimary(String metadataPrimary) {
        this.metadataPrimary = metadataPrimary;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("metadata_secondary")
    public String metadataSecondary;
    public Media withMetadataSecondary(String metadataSecondary) {
        this.metadataSecondary = metadataSecondary;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mime_type")
    public String mimeType;
    public Media withMimeType(String mimeType) {
        this.mimeType = mimeType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("original_file_name")
    public String originalFileName;
    public Media withOriginalFileName(String originalFileName) {
        this.originalFileName = originalFileName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("public")
    public Boolean public_;
    public Media withPublic(Boolean public_) {
        this.public_ = public_;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("store_id")
    public String storeId;
    public Media withStoreId(String storeId) {
        this.storeId = storeId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("time_created")
    public String timeCreated;
    public Media withTimeCreated(String timeCreated) {
        this.timeCreated = timeCreated;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("time_last_updated")
    public String timeLastUpdated;
    public Media withTimeLastUpdated(String timeLastUpdated) {
        this.timeLastUpdated = timeLastUpdated;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("times_downloaded")
    public Long timesDownloaded;
    public Media withTimesDownloaded(Long timesDownloaded) {
        this.timesDownloaded = timesDownloaded;
        return this;
    }
}