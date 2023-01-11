package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetLoadBalancerTypesId200ApplicationJsonLoadBalancerType {
    @JsonProperty("deprecated")
    public String deprecated;
    public GetLoadBalancerTypesId200ApplicationJsonLoadBalancerType withDeprecated(String deprecated) {
        this.deprecated = deprecated;
        return this;
    }
    @JsonProperty("description")
    public String description;
    public GetLoadBalancerTypesId200ApplicationJsonLoadBalancerType withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonProperty("id")
    public Double id;
    public GetLoadBalancerTypesId200ApplicationJsonLoadBalancerType withId(Double id) {
        this.id = id;
        return this;
    }
    @JsonProperty("max_assigned_certificates")
    public Double maxAssignedCertificates;
    public GetLoadBalancerTypesId200ApplicationJsonLoadBalancerType withMaxAssignedCertificates(Double maxAssignedCertificates) {
        this.maxAssignedCertificates = maxAssignedCertificates;
        return this;
    }
    @JsonProperty("max_connections")
    public Double maxConnections;
    public GetLoadBalancerTypesId200ApplicationJsonLoadBalancerType withMaxConnections(Double maxConnections) {
        this.maxConnections = maxConnections;
        return this;
    }
    @JsonProperty("max_services")
    public Double maxServices;
    public GetLoadBalancerTypesId200ApplicationJsonLoadBalancerType withMaxServices(Double maxServices) {
        this.maxServices = maxServices;
        return this;
    }
    @JsonProperty("max_targets")
    public Double maxTargets;
    public GetLoadBalancerTypesId200ApplicationJsonLoadBalancerType withMaxTargets(Double maxTargets) {
        this.maxTargets = maxTargets;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public GetLoadBalancerTypesId200ApplicationJsonLoadBalancerType withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("prices")
    public GetLoadBalancerTypesId200ApplicationJsonLoadBalancerTypePrices[] prices;
    public GetLoadBalancerTypesId200ApplicationJsonLoadBalancerType withPrices(GetLoadBalancerTypesId200ApplicationJsonLoadBalancerTypePrices[] prices) {
        this.prices = prices;
        return this;
    }
}