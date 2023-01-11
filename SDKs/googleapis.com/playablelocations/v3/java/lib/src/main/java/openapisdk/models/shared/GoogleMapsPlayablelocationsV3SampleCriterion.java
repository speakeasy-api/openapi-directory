package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleMapsPlayablelocationsV3SampleCriterion
 * Encapsulates a filter criterion for searching for a set of playable locations.
**/
public class GoogleMapsPlayablelocationsV3SampleCriterion {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fieldsToReturn")
    public String fieldsToReturn;
    public GoogleMapsPlayablelocationsV3SampleCriterion withFieldsToReturn(String fieldsToReturn) {
        this.fieldsToReturn = fieldsToReturn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("filter")
    public GoogleMapsPlayablelocationsV3SampleFilter filter;
    public GoogleMapsPlayablelocationsV3SampleCriterion withFilter(GoogleMapsPlayablelocationsV3SampleFilter filter) {
        this.filter = filter;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gameObjectType")
    public Integer gameObjectType;
    public GoogleMapsPlayablelocationsV3SampleCriterion withGameObjectType(Integer gameObjectType) {
        this.gameObjectType = gameObjectType;
        return this;
    }
}