package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AudioContentTypeAssignedTargetingOptionDetails
 * Details for audio content type assigned targeting option. This will be populated in the audio_content_type_details field when targeting_type is `TARGETING_TYPE_AUDIO_CONTENT_TYPE`. Explicitly targeting all options is not supported. Remove all audio content type targeting options to achieve this effect.
**/
public class AudioContentTypeAssignedTargetingOptionDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("audioContentType")
    public AudioContentTypeAssignedTargetingOptionDetailsAudioContentTypeEnum audioContentType;
    public AudioContentTypeAssignedTargetingOptionDetails withAudioContentType(AudioContentTypeAssignedTargetingOptionDetailsAudioContentTypeEnum audioContentType) {
        this.audioContentType = audioContentType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("targetingOptionId")
    public String targetingOptionId;
    public AudioContentTypeAssignedTargetingOptionDetails withTargetingOptionId(String targetingOptionId) {
        this.targetingOptionId = targetingOptionId;
        return this;
    }
}