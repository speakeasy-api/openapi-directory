/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

public class PutFirewallsIdFirewallResponseFirewallAppliedToAppliedToResources {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("server")
    public PutFirewallsIdFirewallResponseFirewallAppliedToAppliedToResourcesServer server;

    public PutFirewallsIdFirewallResponseFirewallAppliedToAppliedToResources withServer(PutFirewallsIdFirewallResponseFirewallAppliedToAppliedToResourcesServer server) {
        this.server = server;
        return this;
    }
    
    /**
     * Type of resource referenced
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public PutFirewallsIdFirewallResponseFirewallAppliedToAppliedToResourcesTypeEnum type;

    public PutFirewallsIdFirewallResponseFirewallAppliedToAppliedToResources withType(PutFirewallsIdFirewallResponseFirewallAppliedToAppliedToResourcesTypeEnum type) {
        this.type = type;
        return this;
    }
    
    public PutFirewallsIdFirewallResponseFirewallAppliedToAppliedToResources(){}
}
