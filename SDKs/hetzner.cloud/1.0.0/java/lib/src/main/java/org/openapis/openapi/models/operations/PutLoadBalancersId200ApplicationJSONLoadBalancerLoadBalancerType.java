/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PutLoadBalancersId200ApplicationJSONLoadBalancerLoadBalancerType {
    /**
     * Point in time when the Load Balancer type is deprecated (in ISO-8601 format)
     */
    @JsonProperty("deprecated")
    public String deprecated;

    public PutLoadBalancersId200ApplicationJSONLoadBalancerLoadBalancerType withDeprecated(String deprecated) {
        this.deprecated = deprecated;
        return this;
    }
    
    /**
     * Description of the Load Balancer type
     */
    @JsonProperty("description")
    public String description;

    public PutLoadBalancersId200ApplicationJSONLoadBalancerLoadBalancerType withDescription(String description) {
        this.description = description;
        return this;
    }
    
    /**
     * ID of the Load Balancer type
     */
    @JsonProperty("id")
    public Double id;

    public PutLoadBalancersId200ApplicationJSONLoadBalancerLoadBalancerType withId(Double id) {
        this.id = id;
        return this;
    }
    
    /**
     * Number of SSL Certificates that can be assigned to a single Load Balancer
     */
    @JsonProperty("max_assigned_certificates")
    public Double maxAssignedCertificates;

    public PutLoadBalancersId200ApplicationJSONLoadBalancerLoadBalancerType withMaxAssignedCertificates(Double maxAssignedCertificates) {
        this.maxAssignedCertificates = maxAssignedCertificates;
        return this;
    }
    
    /**
     * Number of maximum simultaneous open connections
     */
    @JsonProperty("max_connections")
    public Double maxConnections;

    public PutLoadBalancersId200ApplicationJSONLoadBalancerLoadBalancerType withMaxConnections(Double maxConnections) {
        this.maxConnections = maxConnections;
        return this;
    }
    
    /**
     * Number of services a Load Balancer of this type can have
     */
    @JsonProperty("max_services")
    public Double maxServices;

    public PutLoadBalancersId200ApplicationJSONLoadBalancerLoadBalancerType withMaxServices(Double maxServices) {
        this.maxServices = maxServices;
        return this;
    }
    
    /**
     * Number of targets a single Load Balancer can have
     */
    @JsonProperty("max_targets")
    public Double maxTargets;

    public PutLoadBalancersId200ApplicationJSONLoadBalancerLoadBalancerType withMaxTargets(Double maxTargets) {
        this.maxTargets = maxTargets;
        return this;
    }
    
    /**
     * Unique identifier of the Load Balancer type
     */
    @JsonProperty("name")
    public String name;

    public PutLoadBalancersId200ApplicationJSONLoadBalancerLoadBalancerType withName(String name) {
        this.name = name;
        return this;
    }
    
    /**
     * Prices in different network zones
     */
    @JsonProperty("prices")
    public PutLoadBalancersId200ApplicationJSONLoadBalancerLoadBalancerTypePrices[] prices;

    public PutLoadBalancersId200ApplicationJSONLoadBalancerLoadBalancerType withPrices(PutLoadBalancersId200ApplicationJSONLoadBalancerLoadBalancerTypePrices[] prices) {
        this.prices = prices;
        return this;
    }
    
    public PutLoadBalancersId200ApplicationJSONLoadBalancerLoadBalancerType(@JsonProperty("deprecated") String deprecated, @JsonProperty("description") String description, @JsonProperty("id") Double id, @JsonProperty("max_assigned_certificates") Double maxAssignedCertificates, @JsonProperty("max_connections") Double maxConnections, @JsonProperty("max_services") Double maxServices, @JsonProperty("max_targets") Double maxTargets, @JsonProperty("name") String name, @JsonProperty("prices") PutLoadBalancersId200ApplicationJSONLoadBalancerLoadBalancerTypePrices[] prices) {
        this.deprecated = deprecated;
        this.description = description;
        this.id = id;
        this.maxAssignedCertificates = maxAssignedCertificates;
        this.maxConnections = maxConnections;
        this.maxServices = maxServices;
        this.maxTargets = maxTargets;
        this.name = name;
        this.prices = prices;
  }
}
