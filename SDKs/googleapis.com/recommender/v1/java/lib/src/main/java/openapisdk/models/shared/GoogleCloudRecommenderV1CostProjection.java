package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudRecommenderV1CostProjection
 * Contains metadata about how much money a recommendation can save or incur.
**/
public class GoogleCloudRecommenderV1CostProjection {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cost")
    public GoogleTypeMoney cost;
    public GoogleCloudRecommenderV1CostProjection withCost(GoogleTypeMoney cost) {
        this.cost = cost;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("duration")
    public String duration;
    public GoogleCloudRecommenderV1CostProjection withDuration(String duration) {
        this.duration = duration;
        return this;
    }
}