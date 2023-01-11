package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SubmitJobMediaUrlOptions
 * Rev.ai Job Options Object Model
**/
public class SubmitJobMediaUrlOptions {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("callback_url")
    public String callbackUrl;
    public SubmitJobMediaUrlOptions withCallbackUrl(String callbackUrl) {
        this.callbackUrl = callbackUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("custom_vocabularies")
    public SubmitJobMediaUrlOptionsCustomVocabularies[] customVocabularies;
    public SubmitJobMediaUrlOptions withCustomVocabularies(SubmitJobMediaUrlOptionsCustomVocabularies[] customVocabularies) {
        this.customVocabularies = customVocabularies;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("custom_vocabulary_id")
    public String customVocabularyId;
    public SubmitJobMediaUrlOptions withCustomVocabularyId(String customVocabularyId) {
        this.customVocabularyId = customVocabularyId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("delete_after_seconds")
    public Long deleteAfterSeconds;
    public SubmitJobMediaUrlOptions withDeleteAfterSeconds(Long deleteAfterSeconds) {
        this.deleteAfterSeconds = deleteAfterSeconds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("filter_profanity")
    public Boolean filterProfanity;
    public SubmitJobMediaUrlOptions withFilterProfanity(Boolean filterProfanity) {
        this.filterProfanity = filterProfanity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("language")
    public SubmitJobMediaUrlOptionsLanguageEnum language;
    public SubmitJobMediaUrlOptions withLanguage(SubmitJobMediaUrlOptionsLanguageEnum language) {
        this.language = language;
        return this;
    }
    @JsonProperty("media_url")
    public String mediaUrl;
    public SubmitJobMediaUrlOptions withMediaUrl(String mediaUrl) {
        this.mediaUrl = mediaUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("metadata")
    public String metadata;
    public SubmitJobMediaUrlOptions withMetadata(String metadata) {
        this.metadata = metadata;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("remove_disfluencies")
    public Boolean removeDisfluencies;
    public SubmitJobMediaUrlOptions withRemoveDisfluencies(Boolean removeDisfluencies) {
        this.removeDisfluencies = removeDisfluencies;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("skip_diarization")
    public Boolean skipDiarization;
    public SubmitJobMediaUrlOptions withSkipDiarization(Boolean skipDiarization) {
        this.skipDiarization = skipDiarization;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("skip_punctuation")
    public Boolean skipPunctuation;
    public SubmitJobMediaUrlOptions withSkipPunctuation(Boolean skipPunctuation) {
        this.skipPunctuation = skipPunctuation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("speaker_channels_count")
    public Long speakerChannelsCount;
    public SubmitJobMediaUrlOptions withSpeakerChannelsCount(Long speakerChannelsCount) {
        this.speakerChannelsCount = speakerChannelsCount;
        return this;
    }
}