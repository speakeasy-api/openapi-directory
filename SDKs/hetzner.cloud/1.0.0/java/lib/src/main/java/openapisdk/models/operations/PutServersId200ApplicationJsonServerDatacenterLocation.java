package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PutServersId200ApplicationJsonServerDatacenterLocation {
    @JsonProperty("city")
    public String city;
    public PutServersId200ApplicationJsonServerDatacenterLocation withCity(String city) {
        this.city = city;
        return this;
    }
    @JsonProperty("country")
    public String country;
    public PutServersId200ApplicationJsonServerDatacenterLocation withCountry(String country) {
        this.country = country;
        return this;
    }
    @JsonProperty("description")
    public String description;
    public PutServersId200ApplicationJsonServerDatacenterLocation withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonProperty("id")
    public Double id;
    public PutServersId200ApplicationJsonServerDatacenterLocation withId(Double id) {
        this.id = id;
        return this;
    }
    @JsonProperty("latitude")
    public Double latitude;
    public PutServersId200ApplicationJsonServerDatacenterLocation withLatitude(Double latitude) {
        this.latitude = latitude;
        return this;
    }
    @JsonProperty("longitude")
    public Double longitude;
    public PutServersId200ApplicationJsonServerDatacenterLocation withLongitude(Double longitude) {
        this.longitude = longitude;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public PutServersId200ApplicationJsonServerDatacenterLocation withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("network_zone")
    public String networkZone;
    public PutServersId200ApplicationJsonServerDatacenterLocation withNetworkZone(String networkZone) {
        this.networkZone = networkZone;
        return this;
    }
}