package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerType {
    @JsonProperty("deprecated")
    public String deprecated;
    public GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerType withDeprecated(String deprecated) {
        this.deprecated = deprecated;
        return this;
    }
    @JsonProperty("description")
    public String description;
    public GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerType withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonProperty("id")
    public Double id;
    public GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerType withId(Double id) {
        this.id = id;
        return this;
    }
    @JsonProperty("max_assigned_certificates")
    public Double maxAssignedCertificates;
    public GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerType withMaxAssignedCertificates(Double maxAssignedCertificates) {
        this.maxAssignedCertificates = maxAssignedCertificates;
        return this;
    }
    @JsonProperty("max_connections")
    public Double maxConnections;
    public GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerType withMaxConnections(Double maxConnections) {
        this.maxConnections = maxConnections;
        return this;
    }
    @JsonProperty("max_services")
    public Double maxServices;
    public GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerType withMaxServices(Double maxServices) {
        this.maxServices = maxServices;
        return this;
    }
    @JsonProperty("max_targets")
    public Double maxTargets;
    public GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerType withMaxTargets(Double maxTargets) {
        this.maxTargets = maxTargets;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerType withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("prices")
    public GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerTypePrices[] prices;
    public GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerType withPrices(GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerTypePrices[] prices) {
        this.prices = prices;
        return this;
    }
}