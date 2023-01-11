package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AudioContentTypeTargetingOptionDetails
 * Represents a targetable audio content type. This will be populated in the audio_content_type_details field when targeting_type is `TARGETING_TYPE_AUDIO_CONTENT_TYPE`.
**/
public class AudioContentTypeTargetingOptionDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("audioContentType")
    public AudioContentTypeTargetingOptionDetailsAudioContentTypeEnum audioContentType;
    public AudioContentTypeTargetingOptionDetails withAudioContentType(AudioContentTypeTargetingOptionDetailsAudioContentTypeEnum audioContentType) {
        this.audioContentType = audioContentType;
        return this;
    }
}