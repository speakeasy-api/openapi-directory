package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostLoadBalancers201ApplicationJsonLoadBalancerLocation {
    @JsonProperty("city")
    public String city;
    public PostLoadBalancers201ApplicationJsonLoadBalancerLocation withCity(String city) {
        this.city = city;
        return this;
    }
    @JsonProperty("country")
    public String country;
    public PostLoadBalancers201ApplicationJsonLoadBalancerLocation withCountry(String country) {
        this.country = country;
        return this;
    }
    @JsonProperty("description")
    public String description;
    public PostLoadBalancers201ApplicationJsonLoadBalancerLocation withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonProperty("id")
    public Double id;
    public PostLoadBalancers201ApplicationJsonLoadBalancerLocation withId(Double id) {
        this.id = id;
        return this;
    }
    @JsonProperty("latitude")
    public Double latitude;
    public PostLoadBalancers201ApplicationJsonLoadBalancerLocation withLatitude(Double latitude) {
        this.latitude = latitude;
        return this;
    }
    @JsonProperty("longitude")
    public Double longitude;
    public PostLoadBalancers201ApplicationJsonLoadBalancerLocation withLongitude(Double longitude) {
        this.longitude = longitude;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public PostLoadBalancers201ApplicationJsonLoadBalancerLocation withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("network_zone")
    public String networkZone;
    public PostLoadBalancers201ApplicationJsonLoadBalancerLocation withNetworkZone(String networkZone) {
        this.networkZone = networkZone;
        return this;
    }
}