package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetLocationsId200ApplicationJsonLocation {
    @JsonProperty("city")
    public String city;
    public GetLocationsId200ApplicationJsonLocation withCity(String city) {
        this.city = city;
        return this;
    }
    @JsonProperty("country")
    public String country;
    public GetLocationsId200ApplicationJsonLocation withCountry(String country) {
        this.country = country;
        return this;
    }
    @JsonProperty("description")
    public String description;
    public GetLocationsId200ApplicationJsonLocation withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonProperty("id")
    public Double id;
    public GetLocationsId200ApplicationJsonLocation withId(Double id) {
        this.id = id;
        return this;
    }
    @JsonProperty("latitude")
    public Double latitude;
    public GetLocationsId200ApplicationJsonLocation withLatitude(Double latitude) {
        this.latitude = latitude;
        return this;
    }
    @JsonProperty("longitude")
    public Double longitude;
    public GetLocationsId200ApplicationJsonLocation withLongitude(Double longitude) {
        this.longitude = longitude;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public GetLocationsId200ApplicationJsonLocation withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("network_zone")
    public String networkZone;
    public GetLocationsId200ApplicationJsonLocation withNetworkZone(String networkZone) {
        this.networkZone = networkZone;
        return this;
    }
}