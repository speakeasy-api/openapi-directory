package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SubmitJobOptions
 * Rev.ai Job Options Object Model
**/
public class SubmitJobOptions {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("callback_url")
    public String callbackUrl;
    public SubmitJobOptions withCallbackUrl(String callbackUrl) {
        this.callbackUrl = callbackUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("custom_vocabularies")
    public SubmitJobOptionsCustomVocabularies[] customVocabularies;
    public SubmitJobOptions withCustomVocabularies(SubmitJobOptionsCustomVocabularies[] customVocabularies) {
        this.customVocabularies = customVocabularies;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("custom_vocabulary_id")
    public String customVocabularyId;
    public SubmitJobOptions withCustomVocabularyId(String customVocabularyId) {
        this.customVocabularyId = customVocabularyId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("delete_after_seconds")
    public Long deleteAfterSeconds;
    public SubmitJobOptions withDeleteAfterSeconds(Long deleteAfterSeconds) {
        this.deleteAfterSeconds = deleteAfterSeconds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("filter_profanity")
    public Boolean filterProfanity;
    public SubmitJobOptions withFilterProfanity(Boolean filterProfanity) {
        this.filterProfanity = filterProfanity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("language")
    public SubmitJobOptionsLanguageEnum language;
    public SubmitJobOptions withLanguage(SubmitJobOptionsLanguageEnum language) {
        this.language = language;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("media_url")
    public String mediaUrl;
    public SubmitJobOptions withMediaUrl(String mediaUrl) {
        this.mediaUrl = mediaUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("metadata")
    public String metadata;
    public SubmitJobOptions withMetadata(String metadata) {
        this.metadata = metadata;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("remove_disfluencies")
    public Boolean removeDisfluencies;
    public SubmitJobOptions withRemoveDisfluencies(Boolean removeDisfluencies) {
        this.removeDisfluencies = removeDisfluencies;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("skip_diarization")
    public Boolean skipDiarization;
    public SubmitJobOptions withSkipDiarization(Boolean skipDiarization) {
        this.skipDiarization = skipDiarization;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("skip_punctuation")
    public Boolean skipPunctuation;
    public SubmitJobOptions withSkipPunctuation(Boolean skipPunctuation) {
        this.skipPunctuation = skipPunctuation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("speaker_channels_count")
    public Long speakerChannelsCount;
    public SubmitJobOptions withSpeakerChannelsCount(Long speakerChannelsCount) {
        this.speakerChannelsCount = speakerChannelsCount;
        return this;
    }
}