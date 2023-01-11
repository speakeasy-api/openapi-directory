package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudRecommenderV1ReliabilityProjection
 * Contains information on the impact of a reliability recommendation.
**/
public class GoogleCloudRecommenderV1ReliabilityProjection {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("details")
    public java.util.Map<String, Object> details;
    public GoogleCloudRecommenderV1ReliabilityProjection withDetails(java.util.Map<String, Object> details) {
        this.details = details;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("risks")
    public GoogleCloudRecommenderV1ReliabilityProjectionRisksEnum[] risks;
    public GoogleCloudRecommenderV1ReliabilityProjection withRisks(GoogleCloudRecommenderV1ReliabilityProjectionRisksEnum[] risks) {
        this.risks = risks;
        return this;
    }
}