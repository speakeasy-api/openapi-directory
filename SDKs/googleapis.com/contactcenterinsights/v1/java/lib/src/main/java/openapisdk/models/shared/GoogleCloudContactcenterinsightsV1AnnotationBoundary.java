package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudContactcenterinsightsV1AnnotationBoundary
 * A point in a conversation that marks the start or the end of an annotation.
**/
public class GoogleCloudContactcenterinsightsV1AnnotationBoundary {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("transcriptIndex")
    public Integer transcriptIndex;
    public GoogleCloudContactcenterinsightsV1AnnotationBoundary withTranscriptIndex(Integer transcriptIndex) {
        this.transcriptIndex = transcriptIndex;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("wordIndex")
    public Integer wordIndex;
    public GoogleCloudContactcenterinsightsV1AnnotationBoundary withWordIndex(Integer wordIndex) {
        this.wordIndex = wordIndex;
        return this;
    }
}