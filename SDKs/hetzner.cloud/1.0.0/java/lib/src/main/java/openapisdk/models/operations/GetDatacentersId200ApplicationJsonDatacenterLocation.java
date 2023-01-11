package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetDatacentersId200ApplicationJsonDatacenterLocation {
    @JsonProperty("city")
    public String city;
    public GetDatacentersId200ApplicationJsonDatacenterLocation withCity(String city) {
        this.city = city;
        return this;
    }
    @JsonProperty("country")
    public String country;
    public GetDatacentersId200ApplicationJsonDatacenterLocation withCountry(String country) {
        this.country = country;
        return this;
    }
    @JsonProperty("description")
    public String description;
    public GetDatacentersId200ApplicationJsonDatacenterLocation withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonProperty("id")
    public Double id;
    public GetDatacentersId200ApplicationJsonDatacenterLocation withId(Double id) {
        this.id = id;
        return this;
    }
    @JsonProperty("latitude")
    public Double latitude;
    public GetDatacentersId200ApplicationJsonDatacenterLocation withLatitude(Double latitude) {
        this.latitude = latitude;
        return this;
    }
    @JsonProperty("longitude")
    public Double longitude;
    public GetDatacentersId200ApplicationJsonDatacenterLocation withLongitude(Double longitude) {
        this.longitude = longitude;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public GetDatacentersId200ApplicationJsonDatacenterLocation withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("network_zone")
    public String networkZone;
    public GetDatacentersId200ApplicationJsonDatacenterLocation withNetworkZone(String networkZone) {
        this.networkZone = networkZone;
        return this;
    }
}