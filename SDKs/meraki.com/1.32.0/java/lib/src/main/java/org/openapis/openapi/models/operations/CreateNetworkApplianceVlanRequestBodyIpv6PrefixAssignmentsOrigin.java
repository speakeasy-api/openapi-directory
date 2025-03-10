/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * CreateNetworkApplianceVlanRequestBodyIpv6PrefixAssignmentsOrigin - The origin of the prefix
 */
public class CreateNetworkApplianceVlanRequestBodyIpv6PrefixAssignmentsOrigin {
    /**
     * Interfaces associated with the prefix
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("interfaces")
    public String[] interfaces;

    public CreateNetworkApplianceVlanRequestBodyIpv6PrefixAssignmentsOrigin withInterfaces(String[] interfaces) {
        this.interfaces = interfaces;
        return this;
    }
    
    /**
     * Type of the origin
     */
    @JsonProperty("type")
    public CreateNetworkApplianceVlanRequestBodyIpv6PrefixAssignmentsOriginTypeEnum type;

    public CreateNetworkApplianceVlanRequestBodyIpv6PrefixAssignmentsOrigin withType(CreateNetworkApplianceVlanRequestBodyIpv6PrefixAssignmentsOriginTypeEnum type) {
        this.type = type;
        return this;
    }
    
    public CreateNetworkApplianceVlanRequestBodyIpv6PrefixAssignmentsOrigin(@JsonProperty("type") CreateNetworkApplianceVlanRequestBodyIpv6PrefixAssignmentsOriginTypeEnum type) {
        this.type = type;
  }
}
