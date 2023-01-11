package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerType {
    @JsonProperty("deprecated")
    public String deprecated;
    public PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerType withDeprecated(String deprecated) {
        this.deprecated = deprecated;
        return this;
    }
    @JsonProperty("description")
    public String description;
    public PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerType withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonProperty("id")
    public Double id;
    public PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerType withId(Double id) {
        this.id = id;
        return this;
    }
    @JsonProperty("max_assigned_certificates")
    public Double maxAssignedCertificates;
    public PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerType withMaxAssignedCertificates(Double maxAssignedCertificates) {
        this.maxAssignedCertificates = maxAssignedCertificates;
        return this;
    }
    @JsonProperty("max_connections")
    public Double maxConnections;
    public PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerType withMaxConnections(Double maxConnections) {
        this.maxConnections = maxConnections;
        return this;
    }
    @JsonProperty("max_services")
    public Double maxServices;
    public PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerType withMaxServices(Double maxServices) {
        this.maxServices = maxServices;
        return this;
    }
    @JsonProperty("max_targets")
    public Double maxTargets;
    public PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerType withMaxTargets(Double maxTargets) {
        this.maxTargets = maxTargets;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerType withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("prices")
    public PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTypePrices[] prices;
    public PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerType withPrices(PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTypePrices[] prices) {
        this.prices = prices;
        return this;
    }
}