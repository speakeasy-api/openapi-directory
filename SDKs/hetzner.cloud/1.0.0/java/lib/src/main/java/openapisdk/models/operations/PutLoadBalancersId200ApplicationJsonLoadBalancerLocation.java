package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PutLoadBalancersId200ApplicationJsonLoadBalancerLocation {
    @JsonProperty("city")
    public String city;
    public PutLoadBalancersId200ApplicationJsonLoadBalancerLocation withCity(String city) {
        this.city = city;
        return this;
    }
    @JsonProperty("country")
    public String country;
    public PutLoadBalancersId200ApplicationJsonLoadBalancerLocation withCountry(String country) {
        this.country = country;
        return this;
    }
    @JsonProperty("description")
    public String description;
    public PutLoadBalancersId200ApplicationJsonLoadBalancerLocation withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonProperty("id")
    public Double id;
    public PutLoadBalancersId200ApplicationJsonLoadBalancerLocation withId(Double id) {
        this.id = id;
        return this;
    }
    @JsonProperty("latitude")
    public Double latitude;
    public PutLoadBalancersId200ApplicationJsonLoadBalancerLocation withLatitude(Double latitude) {
        this.latitude = latitude;
        return this;
    }
    @JsonProperty("longitude")
    public Double longitude;
    public PutLoadBalancersId200ApplicationJsonLoadBalancerLocation withLongitude(Double longitude) {
        this.longitude = longitude;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public PutLoadBalancersId200ApplicationJsonLoadBalancerLocation withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("network_zone")
    public String networkZone;
    public PutLoadBalancersId200ApplicationJsonLoadBalancerLocation withNetworkZone(String networkZone) {
        this.networkZone = networkZone;
        return this;
    }
}