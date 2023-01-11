package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetServers200ApplicationJsonServersDatacenterLocation {
    @JsonProperty("city")
    public String city;
    public GetServers200ApplicationJsonServersDatacenterLocation withCity(String city) {
        this.city = city;
        return this;
    }
    @JsonProperty("country")
    public String country;
    public GetServers200ApplicationJsonServersDatacenterLocation withCountry(String country) {
        this.country = country;
        return this;
    }
    @JsonProperty("description")
    public String description;
    public GetServers200ApplicationJsonServersDatacenterLocation withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonProperty("id")
    public Double id;
    public GetServers200ApplicationJsonServersDatacenterLocation withId(Double id) {
        this.id = id;
        return this;
    }
    @JsonProperty("latitude")
    public Double latitude;
    public GetServers200ApplicationJsonServersDatacenterLocation withLatitude(Double latitude) {
        this.latitude = latitude;
        return this;
    }
    @JsonProperty("longitude")
    public Double longitude;
    public GetServers200ApplicationJsonServersDatacenterLocation withLongitude(Double longitude) {
        this.longitude = longitude;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public GetServers200ApplicationJsonServersDatacenterLocation withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("network_zone")
    public String networkZone;
    public GetServers200ApplicationJsonServersDatacenterLocation withNetworkZone(String networkZone) {
        this.networkZone = networkZone;
        return this;
    }
}