package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GeocodeAddressResponse {
    @JsonProperty("found")
    public Integer found;
    public GeocodeAddressResponse withFound(Integer found) {
        this.found = found;
        return this;
    }
    @JsonProperty("locations")
    public Location[] locations;
    public GeocodeAddressResponse withLocations(Location[] locations) {
        this.locations = locations;
        return this;
    }
}