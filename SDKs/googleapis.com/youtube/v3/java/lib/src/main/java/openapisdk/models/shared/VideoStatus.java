package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

/**
 * VideoStatus
 * Basic details about a video category, such as its localized title. Next Id: 18
**/
public class VideoStatus {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("embeddable")
    public Boolean embeddable;
    public VideoStatus withEmbeddable(Boolean embeddable) {
        this.embeddable = embeddable;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("failureReason")
    public VideoStatusFailureReasonEnum failureReason;
    public VideoStatus withFailureReason(VideoStatusFailureReasonEnum failureReason) {
        this.failureReason = failureReason;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("license")
    public VideoStatusLicenseEnum license;
    public VideoStatus withLicense(VideoStatusLicenseEnum license) {
        this.license = license;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("madeForKids")
    public Boolean madeForKids;
    public VideoStatus withMadeForKids(Boolean madeForKids) {
        this.madeForKids = madeForKids;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("privacyStatus")
    public VideoStatusPrivacyStatusEnum privacyStatus;
    public VideoStatus withPrivacyStatus(VideoStatusPrivacyStatusEnum privacyStatus) {
        this.privacyStatus = privacyStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("publicStatsViewable")
    public Boolean publicStatsViewable;
    public VideoStatus withPublicStatsViewable(Boolean publicStatsViewable) {
        this.publicStatsViewable = publicStatsViewable;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("publishAt")
    public OffsetDateTime publishAt;
    public VideoStatus withPublishAt(OffsetDateTime publishAt) {
        this.publishAt = publishAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rejectionReason")
    public VideoStatusRejectionReasonEnum rejectionReason;
    public VideoStatus withRejectionReason(VideoStatusRejectionReasonEnum rejectionReason) {
        this.rejectionReason = rejectionReason;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("selfDeclaredMadeForKids")
    public Boolean selfDeclaredMadeForKids;
    public VideoStatus withSelfDeclaredMadeForKids(Boolean selfDeclaredMadeForKids) {
        this.selfDeclaredMadeForKids = selfDeclaredMadeForKids;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("uploadStatus")
    public VideoStatusUploadStatusEnum uploadStatus;
    public VideoStatus withUploadStatus(VideoStatusUploadStatusEnum uploadStatus) {
        this.uploadStatus = uploadStatus;
        return this;
    }
}