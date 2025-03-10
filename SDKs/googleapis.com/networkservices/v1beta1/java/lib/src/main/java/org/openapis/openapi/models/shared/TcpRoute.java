/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * TcpRoute - TcpRoute is the resource defining how TCP traffic should be routed by a Mesh/Gateway resource.
 */
public class TcpRoute {
    /**
     * Output only. The timestamp when the resource was created.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("createTime")
    public String createTime;

    public TcpRoute withCreateTime(String createTime) {
        this.createTime = createTime;
        return this;
    }
    
    /**
     * Optional. A free-text description of the resource. Max length 1024 characters.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;

    public TcpRoute withDescription(String description) {
        this.description = description;
        return this;
    }
    
    /**
     * Optional. Gateways defines a list of gateways this TcpRoute is attached to, as one of the routing rules to route the requests served by the gateway. Each gateway reference should match the pattern: `projects/* /locations/global/gateways/`
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gateways")
    public String[] gateways;

    public TcpRoute withGateways(String[] gateways) {
        this.gateways = gateways;
        return this;
    }
    
    /**
     * Optional. Set of label tags associated with the TcpRoute resource.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("labels")
    public java.util.Map<String, String> labels;

    public TcpRoute withLabels(java.util.Map<String, String> labels) {
        this.labels = labels;
        return this;
    }
    
    /**
     * Optional. Meshes defines a list of meshes this TcpRoute is attached to, as one of the routing rules to route the requests served by the mesh. Each mesh reference should match the pattern: `projects/* /locations/global/meshes/` The attached Mesh should be of a type SIDECAR
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meshes")
    public String[] meshes;

    public TcpRoute withMeshes(String[] meshes) {
        this.meshes = meshes;
        return this;
    }
    
    /**
     * Required. Name of the TcpRoute resource. It matches pattern `projects/* /locations/global/tcpRoutes/tcp_route_name&gt;`.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;

    public TcpRoute withName(String name) {
        this.name = name;
        return this;
    }
    
    /**
     * Required. Rules that define how traffic is routed and handled. At least one RouteRule must be supplied. If there are multiple rules then the action taken will be the first rule to match.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rules")
    public TcpRouteRouteRule[] rules;

    public TcpRoute withRules(TcpRouteRouteRule[] rules) {
        this.rules = rules;
        return this;
    }
    
    /**
     * Output only. Server-defined URL of this resource
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("selfLink")
    public String selfLink;

    public TcpRoute withSelfLink(String selfLink) {
        this.selfLink = selfLink;
        return this;
    }
    
    /**
     * Output only. The timestamp when the resource was updated.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updateTime")
    public String updateTime;

    public TcpRoute withUpdateTime(String updateTime) {
        this.updateTime = updateTime;
        return this;
    }
    
    public TcpRoute(){}
}
