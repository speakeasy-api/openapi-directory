package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetDatacenters200ApplicationJsonDatacentersLocation {
    @JsonProperty("city")
    public String city;
    public GetDatacenters200ApplicationJsonDatacentersLocation withCity(String city) {
        this.city = city;
        return this;
    }
    @JsonProperty("country")
    public String country;
    public GetDatacenters200ApplicationJsonDatacentersLocation withCountry(String country) {
        this.country = country;
        return this;
    }
    @JsonProperty("description")
    public String description;
    public GetDatacenters200ApplicationJsonDatacentersLocation withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonProperty("id")
    public Double id;
    public GetDatacenters200ApplicationJsonDatacentersLocation withId(Double id) {
        this.id = id;
        return this;
    }
    @JsonProperty("latitude")
    public Double latitude;
    public GetDatacenters200ApplicationJsonDatacentersLocation withLatitude(Double latitude) {
        this.latitude = latitude;
        return this;
    }
    @JsonProperty("longitude")
    public Double longitude;
    public GetDatacenters200ApplicationJsonDatacentersLocation withLongitude(Double longitude) {
        this.longitude = longitude;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public GetDatacenters200ApplicationJsonDatacentersLocation withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("network_zone")
    public String networkZone;
    public GetDatacenters200ApplicationJsonDatacentersLocation withNetworkZone(String networkZone) {
        this.networkZone = networkZone;
        return this;
    }
}