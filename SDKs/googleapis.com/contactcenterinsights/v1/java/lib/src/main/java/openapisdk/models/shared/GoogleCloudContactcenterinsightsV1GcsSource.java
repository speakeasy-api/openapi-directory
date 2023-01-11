package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudContactcenterinsightsV1GcsSource
 * A Cloud Storage source of conversation data.
**/
public class GoogleCloudContactcenterinsightsV1GcsSource {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("audioUri")
    public String audioUri;
    public GoogleCloudContactcenterinsightsV1GcsSource withAudioUri(String audioUri) {
        this.audioUri = audioUri;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("transcriptUri")
    public String transcriptUri;
    public GoogleCloudContactcenterinsightsV1GcsSource withTranscriptUri(String transcriptUri) {
        this.transcriptUri = transcriptUri;
        return this;
    }
}