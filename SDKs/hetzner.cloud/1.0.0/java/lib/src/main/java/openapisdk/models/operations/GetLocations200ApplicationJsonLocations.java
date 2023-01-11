package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetLocations200ApplicationJsonLocations {
    @JsonProperty("city")
    public String city;
    public GetLocations200ApplicationJsonLocations withCity(String city) {
        this.city = city;
        return this;
    }
    @JsonProperty("country")
    public String country;
    public GetLocations200ApplicationJsonLocations withCountry(String country) {
        this.country = country;
        return this;
    }
    @JsonProperty("description")
    public String description;
    public GetLocations200ApplicationJsonLocations withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonProperty("id")
    public Double id;
    public GetLocations200ApplicationJsonLocations withId(Double id) {
        this.id = id;
        return this;
    }
    @JsonProperty("latitude")
    public Double latitude;
    public GetLocations200ApplicationJsonLocations withLatitude(Double latitude) {
        this.latitude = latitude;
        return this;
    }
    @JsonProperty("longitude")
    public Double longitude;
    public GetLocations200ApplicationJsonLocations withLongitude(Double longitude) {
        this.longitude = longitude;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public GetLocations200ApplicationJsonLocations withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("network_zone")
    public String networkZone;
    public GetLocations200ApplicationJsonLocations withNetworkZone(String networkZone) {
        this.networkZone = networkZone;
        return this;
    }
}