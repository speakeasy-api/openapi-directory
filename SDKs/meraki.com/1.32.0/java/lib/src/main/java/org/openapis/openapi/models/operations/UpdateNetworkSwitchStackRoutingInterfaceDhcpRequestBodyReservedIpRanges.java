/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

public class UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyReservedIpRanges {
    /**
     * The comment for the reserved IP range
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("comment")
    public String comment;

    public UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyReservedIpRanges withComment(String comment) {
        this.comment = comment;
        return this;
    }
    
    /**
     * The ending IP address of the reserved IP range
     */
    @JsonProperty("end")
    public String end;

    public UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyReservedIpRanges withEnd(String end) {
        this.end = end;
        return this;
    }
    
    /**
     * The starting IP address of the reserved IP range
     */
    @JsonProperty("start")
    public String start;

    public UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyReservedIpRanges withStart(String start) {
        this.start = start;
        return this;
    }
    
    public UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyReservedIpRanges(@JsonProperty("end") String end, @JsonProperty("start") String start) {
        this.end = end;
        this.start = start;
  }
}
