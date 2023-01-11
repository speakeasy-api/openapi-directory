package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetServersId200ApplicationJsonServerDatacenterLocation {
    @JsonProperty("city")
    public String city;
    public GetServersId200ApplicationJsonServerDatacenterLocation withCity(String city) {
        this.city = city;
        return this;
    }
    @JsonProperty("country")
    public String country;
    public GetServersId200ApplicationJsonServerDatacenterLocation withCountry(String country) {
        this.country = country;
        return this;
    }
    @JsonProperty("description")
    public String description;
    public GetServersId200ApplicationJsonServerDatacenterLocation withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonProperty("id")
    public Double id;
    public GetServersId200ApplicationJsonServerDatacenterLocation withId(Double id) {
        this.id = id;
        return this;
    }
    @JsonProperty("latitude")
    public Double latitude;
    public GetServersId200ApplicationJsonServerDatacenterLocation withLatitude(Double latitude) {
        this.latitude = latitude;
        return this;
    }
    @JsonProperty("longitude")
    public Double longitude;
    public GetServersId200ApplicationJsonServerDatacenterLocation withLongitude(Double longitude) {
        this.longitude = longitude;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public GetServersId200ApplicationJsonServerDatacenterLocation withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("network_zone")
    public String networkZone;
    public GetServersId200ApplicationJsonServerDatacenterLocation withNetworkZone(String networkZone) {
        this.networkZone = networkZone;
        return this;
    }
}