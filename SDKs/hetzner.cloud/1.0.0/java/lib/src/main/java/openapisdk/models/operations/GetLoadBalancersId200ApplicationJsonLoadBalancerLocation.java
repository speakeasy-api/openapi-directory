package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetLoadBalancersId200ApplicationJsonLoadBalancerLocation {
    @JsonProperty("city")
    public String city;
    public GetLoadBalancersId200ApplicationJsonLoadBalancerLocation withCity(String city) {
        this.city = city;
        return this;
    }
    @JsonProperty("country")
    public String country;
    public GetLoadBalancersId200ApplicationJsonLoadBalancerLocation withCountry(String country) {
        this.country = country;
        return this;
    }
    @JsonProperty("description")
    public String description;
    public GetLoadBalancersId200ApplicationJsonLoadBalancerLocation withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonProperty("id")
    public Double id;
    public GetLoadBalancersId200ApplicationJsonLoadBalancerLocation withId(Double id) {
        this.id = id;
        return this;
    }
    @JsonProperty("latitude")
    public Double latitude;
    public GetLoadBalancersId200ApplicationJsonLoadBalancerLocation withLatitude(Double latitude) {
        this.latitude = latitude;
        return this;
    }
    @JsonProperty("longitude")
    public Double longitude;
    public GetLoadBalancersId200ApplicationJsonLoadBalancerLocation withLongitude(Double longitude) {
        this.longitude = longitude;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public GetLoadBalancersId200ApplicationJsonLoadBalancerLocation withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("network_zone")
    public String networkZone;
    public GetLoadBalancersId200ApplicationJsonLoadBalancerLocation withNetworkZone(String networkZone) {
        this.networkZone = networkZone;
        return this;
    }
}