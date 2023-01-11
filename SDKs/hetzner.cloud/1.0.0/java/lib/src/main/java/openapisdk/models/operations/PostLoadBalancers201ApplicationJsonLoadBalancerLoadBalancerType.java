package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerType {
    @JsonProperty("deprecated")
    public String deprecated;
    public PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerType withDeprecated(String deprecated) {
        this.deprecated = deprecated;
        return this;
    }
    @JsonProperty("description")
    public String description;
    public PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerType withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonProperty("id")
    public Double id;
    public PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerType withId(Double id) {
        this.id = id;
        return this;
    }
    @JsonProperty("max_assigned_certificates")
    public Double maxAssignedCertificates;
    public PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerType withMaxAssignedCertificates(Double maxAssignedCertificates) {
        this.maxAssignedCertificates = maxAssignedCertificates;
        return this;
    }
    @JsonProperty("max_connections")
    public Double maxConnections;
    public PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerType withMaxConnections(Double maxConnections) {
        this.maxConnections = maxConnections;
        return this;
    }
    @JsonProperty("max_services")
    public Double maxServices;
    public PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerType withMaxServices(Double maxServices) {
        this.maxServices = maxServices;
        return this;
    }
    @JsonProperty("max_targets")
    public Double maxTargets;
    public PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerType withMaxTargets(Double maxTargets) {
        this.maxTargets = maxTargets;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerType withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("prices")
    public PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerTypePrices[] prices;
    public PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerType withPrices(PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerTypePrices[] prices) {
        this.prices = prices;
        return this;
    }
}