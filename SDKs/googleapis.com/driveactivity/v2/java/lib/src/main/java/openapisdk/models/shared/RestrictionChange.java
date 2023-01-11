package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * RestrictionChange
 * Information about restriction policy changes to a feature.
**/
public class RestrictionChange {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("feature")
    public RestrictionChangeFeatureEnum feature;
    public RestrictionChange withFeature(RestrictionChangeFeatureEnum feature) {
        this.feature = feature;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("newRestriction")
    public RestrictionChangeNewRestrictionEnum newRestriction;
    public RestrictionChange withNewRestriction(RestrictionChangeNewRestrictionEnum newRestriction) {
        this.newRestriction = newRestriction;
        return this;
    }
}