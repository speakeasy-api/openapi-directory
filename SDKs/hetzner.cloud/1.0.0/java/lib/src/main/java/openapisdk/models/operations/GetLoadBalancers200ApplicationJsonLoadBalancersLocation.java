package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetLoadBalancers200ApplicationJsonLoadBalancersLocation {
    @JsonProperty("city")
    public String city;
    public GetLoadBalancers200ApplicationJsonLoadBalancersLocation withCity(String city) {
        this.city = city;
        return this;
    }
    @JsonProperty("country")
    public String country;
    public GetLoadBalancers200ApplicationJsonLoadBalancersLocation withCountry(String country) {
        this.country = country;
        return this;
    }
    @JsonProperty("description")
    public String description;
    public GetLoadBalancers200ApplicationJsonLoadBalancersLocation withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonProperty("id")
    public Double id;
    public GetLoadBalancers200ApplicationJsonLoadBalancersLocation withId(Double id) {
        this.id = id;
        return this;
    }
    @JsonProperty("latitude")
    public Double latitude;
    public GetLoadBalancers200ApplicationJsonLoadBalancersLocation withLatitude(Double latitude) {
        this.latitude = latitude;
        return this;
    }
    @JsonProperty("longitude")
    public Double longitude;
    public GetLoadBalancers200ApplicationJsonLoadBalancersLocation withLongitude(Double longitude) {
        this.longitude = longitude;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public GetLoadBalancers200ApplicationJsonLoadBalancersLocation withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("network_zone")
    public String networkZone;
    public GetLoadBalancers200ApplicationJsonLoadBalancersLocation withNetworkZone(String networkZone) {
        this.networkZone = networkZone;
        return this;
    }
}