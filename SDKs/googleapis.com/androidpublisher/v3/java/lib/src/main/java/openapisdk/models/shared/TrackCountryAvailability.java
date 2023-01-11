package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * TrackCountryAvailability
 * Resource for per-track country availability information.
**/
public class TrackCountryAvailability {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("countries")
    public TrackTargetedCountry[] countries;
    public TrackCountryAvailability withCountries(TrackTargetedCountry[] countries) {
        this.countries = countries;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("restOfWorld")
    public Boolean restOfWorld;
    public TrackCountryAvailability withRestOfWorld(Boolean restOfWorld) {
        this.restOfWorld = restOfWorld;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("syncWithProduction")
    public Boolean syncWithProduction;
    public TrackCountryAvailability withSyncWithProduction(Boolean syncWithProduction) {
        this.syncWithProduction = syncWithProduction;
        return this;
    }
}