package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerType {
    @JsonProperty("deprecated")
    public String deprecated;
    public GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerType withDeprecated(String deprecated) {
        this.deprecated = deprecated;
        return this;
    }
    @JsonProperty("description")
    public String description;
    public GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerType withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonProperty("id")
    public Double id;
    public GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerType withId(Double id) {
        this.id = id;
        return this;
    }
    @JsonProperty("max_assigned_certificates")
    public Double maxAssignedCertificates;
    public GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerType withMaxAssignedCertificates(Double maxAssignedCertificates) {
        this.maxAssignedCertificates = maxAssignedCertificates;
        return this;
    }
    @JsonProperty("max_connections")
    public Double maxConnections;
    public GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerType withMaxConnections(Double maxConnections) {
        this.maxConnections = maxConnections;
        return this;
    }
    @JsonProperty("max_services")
    public Double maxServices;
    public GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerType withMaxServices(Double maxServices) {
        this.maxServices = maxServices;
        return this;
    }
    @JsonProperty("max_targets")
    public Double maxTargets;
    public GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerType withMaxTargets(Double maxTargets) {
        this.maxTargets = maxTargets;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerType withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("prices")
    public GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTypePrices[] prices;
    public GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerType withPrices(GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTypePrices[] prices) {
        this.prices = prices;
        return this;
    }
}