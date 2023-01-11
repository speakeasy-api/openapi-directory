package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetLocations200ApplicationJson {
    @JsonProperty("locations")
    public GetLocations200ApplicationJsonLocations[] locations;
    public GetLocations200ApplicationJson withLocations(GetLocations200ApplicationJsonLocations[] locations) {
        this.locations = locations;
        return this;
    }
}