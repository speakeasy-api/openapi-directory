package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudRecommenderV1SustainabilityProjection
 * Contains metadata about how much sustainability a recommendation can save or incur.
**/
public class GoogleCloudRecommenderV1SustainabilityProjection {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("duration")
    public String duration;
    public GoogleCloudRecommenderV1SustainabilityProjection withDuration(String duration) {
        this.duration = duration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kgCO2e")
    public Double kgCo2e;
    public GoogleCloudRecommenderV1SustainabilityProjection withKgCo2e(Double kgCo2e) {
        this.kgCo2e = kgCo2e;
        return this;
    }
}