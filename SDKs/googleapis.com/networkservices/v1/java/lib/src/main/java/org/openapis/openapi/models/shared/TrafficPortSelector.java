/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * TrafficPortSelector - Specification of a port-based selector.
 */
public class TrafficPortSelector {
    /**
     * Optional. A list of ports. Can be port numbers or port range (example, [80-90] specifies all ports from 80 to 90, including 80 and 90) or named ports or * to specify all ports. If the list is empty, all ports are selected.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ports")
    public String[] ports;

    public TrafficPortSelector withPorts(String[] ports) {
        this.ports = ports;
        return this;
    }
    
    public TrafficPortSelector(){}
}
