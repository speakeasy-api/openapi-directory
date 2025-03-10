/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * Backend - Message containing information of one individual backend.
 */
public class Backend {
    /**
     * Specifies how to determine whether the backend of a load balancer can handle additional traffic or is fully loaded. For usage guidelines, see Connection balancing mode. Backends must use compatible balancing modes. For more information, see Supported balancing modes and target capacity settings and Restrictions and guidance for instance groups. Note: Currently, if you use the API to configure incompatible balancing modes, the configuration might be accepted even though it has no impact and is ignored. Specifically, Backend.maxUtilization is ignored when Backend.balancingMode is RATE. In the future, this incompatible combination will be rejected.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("balancingMode")
    public BackendBalancingModeEnum balancingMode;

    public Backend withBalancingMode(BackendBalancingModeEnum balancingMode) {
        this.balancingMode = balancingMode;
        return this;
    }
    
    /**
     * A multiplier applied to the backend's target capacity of its balancing mode. The default value is 1, which means the group serves up to 100% of its configured capacity (depending on balancingMode). A setting of 0 means the group is completely drained, offering 0% of its available capacity. The valid ranges are 0.0 and [0.1,1.0]. You cannot configure a setting larger than 0 and smaller than 0.1. You cannot configure a setting of 0 when there is only one backend attached to the backend service. Not available with backends that don't support using a balancingMode. This includes backends such as global internet NEGs, regional serverless NEGs, and PSC NEGs.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("capacityScaler")
    public Float capacityScaler;

    public Backend withCapacityScaler(Float capacityScaler) {
        this.capacityScaler = capacityScaler;
        return this;
    }
    
    /**
     * An optional description of this resource. Provide this property when you create the resource.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;

    public Backend withDescription(String description) {
        this.description = description;
        return this;
    }
    
    /**
     * This field designates whether this is a failover backend. More than one failover backend can be configured for a given BackendService.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("failover")
    public Boolean failover;

    public Backend withFailover(Boolean failover) {
        this.failover = failover;
        return this;
    }
    
    /**
     * The fully-qualified URL of an instance group or network endpoint group (NEG) resource. To determine what types of backends a load balancer supports, see the [Backend services overview](https://cloud.google.com/load-balancing/docs/backend-service#backends). You must use the *fully-qualified* URL (starting with https://www.googleapis.com/) to specify the instance group or NEG. Partial URLs are not supported.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("group")
    public String group;

    public Backend withGroup(String group) {
        this.group = group;
        return this;
    }
    
    /**
     * Defines a target maximum number of simultaneous connections. For usage guidelines, see Connection balancing mode and Utilization balancing mode. Not available if the backend's balancingMode is RATE.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxConnections")
    public Integer maxConnections;

    public Backend withMaxConnections(Integer maxConnections) {
        this.maxConnections = maxConnections;
        return this;
    }
    
    /**
     * Defines a target maximum number of simultaneous connections. For usage guidelines, see Connection balancing mode and Utilization balancing mode. Not available if the backend's balancingMode is RATE.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxConnectionsPerEndpoint")
    public Integer maxConnectionsPerEndpoint;

    public Backend withMaxConnectionsPerEndpoint(Integer maxConnectionsPerEndpoint) {
        this.maxConnectionsPerEndpoint = maxConnectionsPerEndpoint;
        return this;
    }
    
    /**
     * Defines a target maximum number of simultaneous connections. For usage guidelines, see Connection balancing mode and Utilization balancing mode. Not available if the backend's balancingMode is RATE.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxConnectionsPerInstance")
    public Integer maxConnectionsPerInstance;

    public Backend withMaxConnectionsPerInstance(Integer maxConnectionsPerInstance) {
        this.maxConnectionsPerInstance = maxConnectionsPerInstance;
        return this;
    }
    
    /**
     * Defines a maximum number of HTTP requests per second (RPS). For usage guidelines, see Rate balancing mode and Utilization balancing mode. Not available if the backend's balancingMode is CONNECTION.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxRate")
    public Integer maxRate;

    public Backend withMaxRate(Integer maxRate) {
        this.maxRate = maxRate;
        return this;
    }
    
    /**
     * Defines a maximum target for requests per second (RPS). For usage guidelines, see Rate balancing mode and Utilization balancing mode. Not available if the backend's balancingMode is CONNECTION.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxRatePerEndpoint")
    public Float maxRatePerEndpoint;

    public Backend withMaxRatePerEndpoint(Float maxRatePerEndpoint) {
        this.maxRatePerEndpoint = maxRatePerEndpoint;
        return this;
    }
    
    /**
     * Defines a maximum target for requests per second (RPS). For usage guidelines, see Rate balancing mode and Utilization balancing mode. Not available if the backend's balancingMode is CONNECTION.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxRatePerInstance")
    public Float maxRatePerInstance;

    public Backend withMaxRatePerInstance(Float maxRatePerInstance) {
        this.maxRatePerInstance = maxRatePerInstance;
        return this;
    }
    
    /**
     * Optional parameter to define a target capacity for the UTILIZATION balancing mode. The valid range is [0.0, 1.0]. For usage guidelines, see Utilization balancing mode.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxUtilization")
    public Float maxUtilization;

    public Backend withMaxUtilization(Float maxUtilization) {
        this.maxUtilization = maxUtilization;
        return this;
    }
    
    public Backend(){}
}
