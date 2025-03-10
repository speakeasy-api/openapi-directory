/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

public class PacketMirroringForwardingRuleInfo {
    /**
     * [Output Only] Unique identifier for the forwarding rule; defined by the server.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("canonicalUrl")
    public String canonicalUrl;

    public PacketMirroringForwardingRuleInfo withCanonicalUrl(String canonicalUrl) {
        this.canonicalUrl = canonicalUrl;
        return this;
    }
    
    /**
     * Resource URL to the forwarding rule representing the ILB configured as destination of the mirrored traffic.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;

    public PacketMirroringForwardingRuleInfo withUrl(String url) {
        this.url = url;
        return this;
    }
    
    public PacketMirroringForwardingRuleInfo(){}
}
