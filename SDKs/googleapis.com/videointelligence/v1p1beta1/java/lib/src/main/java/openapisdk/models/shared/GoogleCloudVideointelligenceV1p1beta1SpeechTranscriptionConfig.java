package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudVideointelligenceV1p1beta1SpeechTranscriptionConfig
 * Config for SPEECH_TRANSCRIPTION.
**/
public class GoogleCloudVideointelligenceV1p1beta1SpeechTranscriptionConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("audioTracks")
    public Integer[] audioTracks;
    public GoogleCloudVideointelligenceV1p1beta1SpeechTranscriptionConfig withAudioTracks(Integer[] audioTracks) {
        this.audioTracks = audioTracks;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("diarizationSpeakerCount")
    public Integer diarizationSpeakerCount;
    public GoogleCloudVideointelligenceV1p1beta1SpeechTranscriptionConfig withDiarizationSpeakerCount(Integer diarizationSpeakerCount) {
        this.diarizationSpeakerCount = diarizationSpeakerCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enableAutomaticPunctuation")
    public Boolean enableAutomaticPunctuation;
    public GoogleCloudVideointelligenceV1p1beta1SpeechTranscriptionConfig withEnableAutomaticPunctuation(Boolean enableAutomaticPunctuation) {
        this.enableAutomaticPunctuation = enableAutomaticPunctuation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enableSpeakerDiarization")
    public Boolean enableSpeakerDiarization;
    public GoogleCloudVideointelligenceV1p1beta1SpeechTranscriptionConfig withEnableSpeakerDiarization(Boolean enableSpeakerDiarization) {
        this.enableSpeakerDiarization = enableSpeakerDiarization;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enableWordConfidence")
    public Boolean enableWordConfidence;
    public GoogleCloudVideointelligenceV1p1beta1SpeechTranscriptionConfig withEnableWordConfidence(Boolean enableWordConfidence) {
        this.enableWordConfidence = enableWordConfidence;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("filterProfanity")
    public Boolean filterProfanity;
    public GoogleCloudVideointelligenceV1p1beta1SpeechTranscriptionConfig withFilterProfanity(Boolean filterProfanity) {
        this.filterProfanity = filterProfanity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("languageCode")
    public String languageCode;
    public GoogleCloudVideointelligenceV1p1beta1SpeechTranscriptionConfig withLanguageCode(String languageCode) {
        this.languageCode = languageCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxAlternatives")
    public Integer maxAlternatives;
    public GoogleCloudVideointelligenceV1p1beta1SpeechTranscriptionConfig withMaxAlternatives(Integer maxAlternatives) {
        this.maxAlternatives = maxAlternatives;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("speechContexts")
    public GoogleCloudVideointelligenceV1p1beta1SpeechContext[] speechContexts;
    public GoogleCloudVideointelligenceV1p1beta1SpeechTranscriptionConfig withSpeechContexts(GoogleCloudVideointelligenceV1p1beta1SpeechContext[] speechContexts) {
        this.speechContexts = speechContexts;
        return this;
    }
}