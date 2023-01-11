package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * RecognitionMetadata
 * Description of audio data to be recognized.
**/
public class RecognitionMetadata {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("audioTopic")
    public String audioTopic;
    public RecognitionMetadata withAudioTopic(String audioTopic) {
        this.audioTopic = audioTopic;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("industryNaicsCodeOfAudio")
    public Long industryNaicsCodeOfAudio;
    public RecognitionMetadata withIndustryNaicsCodeOfAudio(Long industryNaicsCodeOfAudio) {
        this.industryNaicsCodeOfAudio = industryNaicsCodeOfAudio;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("interactionType")
    public RecognitionMetadataInteractionTypeEnum interactionType;
    public RecognitionMetadata withInteractionType(RecognitionMetadataInteractionTypeEnum interactionType) {
        this.interactionType = interactionType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("microphoneDistance")
    public RecognitionMetadataMicrophoneDistanceEnum microphoneDistance;
    public RecognitionMetadata withMicrophoneDistance(RecognitionMetadataMicrophoneDistanceEnum microphoneDistance) {
        this.microphoneDistance = microphoneDistance;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("obfuscatedId")
    public String obfuscatedId;
    public RecognitionMetadata withObfuscatedId(String obfuscatedId) {
        this.obfuscatedId = obfuscatedId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("originalMediaType")
    public RecognitionMetadataOriginalMediaTypeEnum originalMediaType;
    public RecognitionMetadata withOriginalMediaType(RecognitionMetadataOriginalMediaTypeEnum originalMediaType) {
        this.originalMediaType = originalMediaType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("originalMimeType")
    public String originalMimeType;
    public RecognitionMetadata withOriginalMimeType(String originalMimeType) {
        this.originalMimeType = originalMimeType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("recordingDeviceName")
    public String recordingDeviceName;
    public RecognitionMetadata withRecordingDeviceName(String recordingDeviceName) {
        this.recordingDeviceName = recordingDeviceName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("recordingDeviceType")
    public RecognitionMetadataRecordingDeviceTypeEnum recordingDeviceType;
    public RecognitionMetadata withRecordingDeviceType(RecognitionMetadataRecordingDeviceTypeEnum recordingDeviceType) {
        this.recordingDeviceType = recordingDeviceType;
        return this;
    }
}