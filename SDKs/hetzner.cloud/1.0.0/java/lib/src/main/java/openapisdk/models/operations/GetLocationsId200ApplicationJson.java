package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetLocationsId200ApplicationJson {
    @JsonProperty("location")
    public GetLocationsId200ApplicationJsonLocation location;
    public GetLocationsId200ApplicationJson withLocation(GetLocationsId200ApplicationJsonLocation location) {
        this.location = location;
        return this;
    }
}