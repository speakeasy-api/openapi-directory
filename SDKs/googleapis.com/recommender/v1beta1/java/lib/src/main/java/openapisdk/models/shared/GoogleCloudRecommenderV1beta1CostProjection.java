package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudRecommenderV1beta1CostProjection
 * Contains metadata about how much money a recommendation can save or incur.
**/
public class GoogleCloudRecommenderV1beta1CostProjection {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cost")
    public GoogleTypeMoney cost;
    public GoogleCloudRecommenderV1beta1CostProjection withCost(GoogleTypeMoney cost) {
        this.cost = cost;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("duration")
    public String duration;
    public GoogleCloudRecommenderV1beta1CostProjection withDuration(String duration) {
        this.duration = duration;
        return this;
    }
}