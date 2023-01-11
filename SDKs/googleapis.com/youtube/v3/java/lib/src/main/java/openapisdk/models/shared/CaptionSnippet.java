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
 * CaptionSnippet
 * Basic details about a caption track, such as its language and name.
**/
public class CaptionSnippet {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("audioTrackType")
    public CaptionSnippetAudioTrackTypeEnum audioTrackType;
    public CaptionSnippet withAudioTrackType(CaptionSnippetAudioTrackTypeEnum audioTrackType) {
        this.audioTrackType = audioTrackType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("failureReason")
    public CaptionSnippetFailureReasonEnum failureReason;
    public CaptionSnippet withFailureReason(CaptionSnippetFailureReasonEnum failureReason) {
        this.failureReason = failureReason;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isAutoSynced")
    public Boolean isAutoSynced;
    public CaptionSnippet withIsAutoSynced(Boolean isAutoSynced) {
        this.isAutoSynced = isAutoSynced;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isCC")
    public Boolean isCC;
    public CaptionSnippet withIsCc(Boolean isCC) {
        this.isCC = isCC;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isDraft")
    public Boolean isDraft;
    public CaptionSnippet withIsDraft(Boolean isDraft) {
        this.isDraft = isDraft;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isEasyReader")
    public Boolean isEasyReader;
    public CaptionSnippet withIsEasyReader(Boolean isEasyReader) {
        this.isEasyReader = isEasyReader;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isLarge")
    public Boolean isLarge;
    public CaptionSnippet withIsLarge(Boolean isLarge) {
        this.isLarge = isLarge;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("language")
    public String language;
    public CaptionSnippet withLanguage(String language) {
        this.language = language;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("lastUpdated")
    public OffsetDateTime lastUpdated;
    public CaptionSnippet withLastUpdated(OffsetDateTime lastUpdated) {
        this.lastUpdated = lastUpdated;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public CaptionSnippet withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public CaptionSnippetStatusEnum status;
    public CaptionSnippet withStatus(CaptionSnippetStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("trackKind")
    public CaptionSnippetTrackKindEnum trackKind;
    public CaptionSnippet withTrackKind(CaptionSnippetTrackKindEnum trackKind) {
        this.trackKind = trackKind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("videoId")
    public String videoId;
    public CaptionSnippet withVideoId(String videoId) {
        this.videoId = videoId;
        return this;
    }
}