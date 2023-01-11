package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * RecognitionConfigInput
 * Provides information to the recognizer that specifies how to process the request.
**/
public class RecognitionConfigInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("adaptation")
    public SpeechAdaptation adaptation;
    public RecognitionConfigInput withAdaptation(SpeechAdaptation adaptation) {
        this.adaptation = adaptation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("alternativeLanguageCodes")
    public String[] alternativeLanguageCodes;
    public RecognitionConfigInput withAlternativeLanguageCodes(String[] alternativeLanguageCodes) {
        this.alternativeLanguageCodes = alternativeLanguageCodes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("audioChannelCount")
    public Integer audioChannelCount;
    public RecognitionConfigInput withAudioChannelCount(Integer audioChannelCount) {
        this.audioChannelCount = audioChannelCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("diarizationConfig")
    public SpeakerDiarizationConfigInput diarizationConfig;
    public RecognitionConfigInput withDiarizationConfig(SpeakerDiarizationConfigInput diarizationConfig) {
        this.diarizationConfig = diarizationConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("diarizationSpeakerCount")
    public Integer diarizationSpeakerCount;
    public RecognitionConfigInput withDiarizationSpeakerCount(Integer diarizationSpeakerCount) {
        this.diarizationSpeakerCount = diarizationSpeakerCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enableAutomaticPunctuation")
    public Boolean enableAutomaticPunctuation;
    public RecognitionConfigInput withEnableAutomaticPunctuation(Boolean enableAutomaticPunctuation) {
        this.enableAutomaticPunctuation = enableAutomaticPunctuation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enableSeparateRecognitionPerChannel")
    public Boolean enableSeparateRecognitionPerChannel;
    public RecognitionConfigInput withEnableSeparateRecognitionPerChannel(Boolean enableSeparateRecognitionPerChannel) {
        this.enableSeparateRecognitionPerChannel = enableSeparateRecognitionPerChannel;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enableSpeakerDiarization")
    public Boolean enableSpeakerDiarization;
    public RecognitionConfigInput withEnableSpeakerDiarization(Boolean enableSpeakerDiarization) {
        this.enableSpeakerDiarization = enableSpeakerDiarization;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enableSpokenEmojis")
    public Boolean enableSpokenEmojis;
    public RecognitionConfigInput withEnableSpokenEmojis(Boolean enableSpokenEmojis) {
        this.enableSpokenEmojis = enableSpokenEmojis;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enableSpokenPunctuation")
    public Boolean enableSpokenPunctuation;
    public RecognitionConfigInput withEnableSpokenPunctuation(Boolean enableSpokenPunctuation) {
        this.enableSpokenPunctuation = enableSpokenPunctuation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enableWordConfidence")
    public Boolean enableWordConfidence;
    public RecognitionConfigInput withEnableWordConfidence(Boolean enableWordConfidence) {
        this.enableWordConfidence = enableWordConfidence;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enableWordTimeOffsets")
    public Boolean enableWordTimeOffsets;
    public RecognitionConfigInput withEnableWordTimeOffsets(Boolean enableWordTimeOffsets) {
        this.enableWordTimeOffsets = enableWordTimeOffsets;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("encoding")
    public RecognitionConfigEncodingEnum encoding;
    public RecognitionConfigInput withEncoding(RecognitionConfigEncodingEnum encoding) {
        this.encoding = encoding;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("languageCode")
    public String languageCode;
    public RecognitionConfigInput withLanguageCode(String languageCode) {
        this.languageCode = languageCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxAlternatives")
    public Integer maxAlternatives;
    public RecognitionConfigInput withMaxAlternatives(Integer maxAlternatives) {
        this.maxAlternatives = maxAlternatives;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("metadata")
    public RecognitionMetadata metadata;
    public RecognitionConfigInput withMetadata(RecognitionMetadata metadata) {
        this.metadata = metadata;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("model")
    public String model;
    public RecognitionConfigInput withModel(String model) {
        this.model = model;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("profanityFilter")
    public Boolean profanityFilter;
    public RecognitionConfigInput withProfanityFilter(Boolean profanityFilter) {
        this.profanityFilter = profanityFilter;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sampleRateHertz")
    public Integer sampleRateHertz;
    public RecognitionConfigInput withSampleRateHertz(Integer sampleRateHertz) {
        this.sampleRateHertz = sampleRateHertz;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("speechContexts")
    public SpeechContext[] speechContexts;
    public RecognitionConfigInput withSpeechContexts(SpeechContext[] speechContexts) {
        this.speechContexts = speechContexts;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("transcriptNormalization")
    public TranscriptNormalization transcriptNormalization;
    public RecognitionConfigInput withTranscriptNormalization(TranscriptNormalization transcriptNormalization) {
        this.transcriptNormalization = transcriptNormalization;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("useEnhanced")
    public Boolean useEnhanced;
    public RecognitionConfigInput withUseEnhanced(Boolean useEnhanced) {
        this.useEnhanced = useEnhanced;
        return this;
    }
}