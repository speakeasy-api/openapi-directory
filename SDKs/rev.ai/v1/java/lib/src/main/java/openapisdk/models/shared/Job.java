package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Job
 * Rev.ai Transcription Job
 * ***
 * Note: properties are not displayed in the returned object if they are null
 * 
**/
public class Job {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("callback_url")
    public String callbackUrl;
    public Job withCallbackUrl(String callbackUrl) {
        this.callbackUrl = callbackUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("completed_on")
    public String completedOn;
    public Job withCompletedOn(String completedOn) {
        this.completedOn = completedOn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("created_on")
    public String createdOn;
    public Job withCreatedOn(String createdOn) {
        this.createdOn = createdOn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("custom_vocabulary_id")
    public String customVocabularyId;
    public Job withCustomVocabularyId(String customVocabularyId) {
        this.customVocabularyId = customVocabularyId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("delete_after_seconds")
    public Long deleteAfterSeconds;
    public Job withDeleteAfterSeconds(Long deleteAfterSeconds) {
        this.deleteAfterSeconds = deleteAfterSeconds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("duration_seconds")
    public Double durationSeconds;
    public Job withDurationSeconds(Double durationSeconds) {
        this.durationSeconds = durationSeconds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("failure")
    public JobFailureEnum failure;
    public Job withFailure(JobFailureEnum failure) {
        this.failure = failure;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("failure_detail")
    public String failureDetail;
    public Job withFailureDetail(String failureDetail) {
        this.failureDetail = failureDetail;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("filter_profanity")
    public Boolean filterProfanity;
    public Job withFilterProfanity(Boolean filterProfanity) {
        this.filterProfanity = filterProfanity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public Job withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("language")
    public JobLanguageEnum language;
    public Job withLanguage(JobLanguageEnum language) {
        this.language = language;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("media_url")
    public String mediaUrl;
    public Job withMediaUrl(String mediaUrl) {
        this.mediaUrl = mediaUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("metadata")
    public String metadata;
    public Job withMetadata(String metadata) {
        this.metadata = metadata;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public Job withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("remove_disfluencies")
    public Boolean removeDisfluencies;
    public Job withRemoveDisfluencies(Boolean removeDisfluencies) {
        this.removeDisfluencies = removeDisfluencies;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("skip_diarization")
    public Boolean skipDiarization;
    public Job withSkipDiarization(Boolean skipDiarization) {
        this.skipDiarization = skipDiarization;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("skip_punctuation")
    public Boolean skipPunctuation;
    public Job withSkipPunctuation(Boolean skipPunctuation) {
        this.skipPunctuation = skipPunctuation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("speaker_channels_count")
    public Long speakerChannelsCount;
    public Job withSpeakerChannelsCount(Long speakerChannelsCount) {
        this.speakerChannelsCount = speakerChannelsCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public JobStatusEnum status;
    public Job withStatus(JobStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public JobTypeEnum type;
    public Job withType(JobTypeEnum type) {
        this.type = type;
        return this;
    }
}