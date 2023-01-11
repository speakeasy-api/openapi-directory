package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetLoadBalancerTypes200ApplicationJsonLoadBalancerTypes {
    @JsonProperty("deprecated")
    public String deprecated;
    public GetLoadBalancerTypes200ApplicationJsonLoadBalancerTypes withDeprecated(String deprecated) {
        this.deprecated = deprecated;
        return this;
    }
    @JsonProperty("description")
    public String description;
    public GetLoadBalancerTypes200ApplicationJsonLoadBalancerTypes withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonProperty("id")
    public Double id;
    public GetLoadBalancerTypes200ApplicationJsonLoadBalancerTypes withId(Double id) {
        this.id = id;
        return this;
    }
    @JsonProperty("max_assigned_certificates")
    public Double maxAssignedCertificates;
    public GetLoadBalancerTypes200ApplicationJsonLoadBalancerTypes withMaxAssignedCertificates(Double maxAssignedCertificates) {
        this.maxAssignedCertificates = maxAssignedCertificates;
        return this;
    }
    @JsonProperty("max_connections")
    public Double maxConnections;
    public GetLoadBalancerTypes200ApplicationJsonLoadBalancerTypes withMaxConnections(Double maxConnections) {
        this.maxConnections = maxConnections;
        return this;
    }
    @JsonProperty("max_services")
    public Double maxServices;
    public GetLoadBalancerTypes200ApplicationJsonLoadBalancerTypes withMaxServices(Double maxServices) {
        this.maxServices = maxServices;
        return this;
    }
    @JsonProperty("max_targets")
    public Double maxTargets;
    public GetLoadBalancerTypes200ApplicationJsonLoadBalancerTypes withMaxTargets(Double maxTargets) {
        this.maxTargets = maxTargets;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public GetLoadBalancerTypes200ApplicationJsonLoadBalancerTypes withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("prices")
    public GetLoadBalancerTypes200ApplicationJsonLoadBalancerTypesPrices[] prices;
    public GetLoadBalancerTypes200ApplicationJsonLoadBalancerTypes withPrices(GetLoadBalancerTypes200ApplicationJsonLoadBalancerTypesPrices[] prices) {
        this.prices = prices;
        return this;
    }
}