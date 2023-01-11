package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CitiesListResponse
 * City List Response
**/
public class CitiesListResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cities")
    public City[] cities;
    public CitiesListResponse withCities(City[] cities) {
        this.cities = cities;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public CitiesListResponse withKind(String kind) {
        this.kind = kind;
        return this;
    }
}