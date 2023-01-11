package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostServersCreateServerResponseServerDatacenterLocation {
    @JsonProperty("city")
    public String city;
    public PostServersCreateServerResponseServerDatacenterLocation withCity(String city) {
        this.city = city;
        return this;
    }
    @JsonProperty("country")
    public String country;
    public PostServersCreateServerResponseServerDatacenterLocation withCountry(String country) {
        this.country = country;
        return this;
    }
    @JsonProperty("description")
    public String description;
    public PostServersCreateServerResponseServerDatacenterLocation withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonProperty("id")
    public Double id;
    public PostServersCreateServerResponseServerDatacenterLocation withId(Double id) {
        this.id = id;
        return this;
    }
    @JsonProperty("latitude")
    public Double latitude;
    public PostServersCreateServerResponseServerDatacenterLocation withLatitude(Double latitude) {
        this.latitude = latitude;
        return this;
    }
    @JsonProperty("longitude")
    public Double longitude;
    public PostServersCreateServerResponseServerDatacenterLocation withLongitude(Double longitude) {
        this.longitude = longitude;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public PostServersCreateServerResponseServerDatacenterLocation withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("network_zone")
    public String networkZone;
    public PostServersCreateServerResponseServerDatacenterLocation withNetworkZone(String networkZone) {
        this.networkZone = networkZone;
        return this;
    }
}