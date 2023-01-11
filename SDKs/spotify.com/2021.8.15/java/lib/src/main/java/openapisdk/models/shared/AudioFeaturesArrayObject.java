package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AudioFeaturesArrayObject {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("audio_features")
    public AudioFeaturesObject[] audioFeatures;
    public AudioFeaturesArrayObject withAudioFeatures(AudioFeaturesObject[] audioFeatures) {
        this.audioFeatures = audioFeatures;
        return this;
    }
}