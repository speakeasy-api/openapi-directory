/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ResponsePolicy - A Response Policy is a collection of selectors that apply to queries made against one or more Virtual Private Cloud networks.
 */
public class ResponsePolicy {
    /**
     * User-provided description for this Response Policy.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;

    public ResponsePolicy withDescription(String description) {
        this.description = description;
        return this;
    }
    
    /**
     * The list of Google Kubernetes Engine clusters to which this response policy is applied.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gkeClusters")
    public ResponsePolicyGKECluster[] gkeClusters;

    public ResponsePolicy withGkeClusters(ResponsePolicyGKECluster[] gkeClusters) {
        this.gkeClusters = gkeClusters;
        return this;
    }
    
    /**
     * Unique identifier for the resource; defined by the server (output only).
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;

    public ResponsePolicy withId(String id) {
        this.id = id;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;

    public ResponsePolicy withKind(String kind) {
        this.kind = kind;
        return this;
    }
    
    /**
     * User labels.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("labels")
    public java.util.Map<String, String> labels;

    public ResponsePolicy withLabels(java.util.Map<String, String> labels) {
        this.labels = labels;
        return this;
    }
    
    /**
     * List of network names specifying networks to which this policy is applied.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("networks")
    public ResponsePolicyNetwork[] networks;

    public ResponsePolicy withNetworks(ResponsePolicyNetwork[] networks) {
        this.networks = networks;
        return this;
    }
    
    /**
     * User assigned name for this Response Policy.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("responsePolicyName")
    public String responsePolicyName;

    public ResponsePolicy withResponsePolicyName(String responsePolicyName) {
        this.responsePolicyName = responsePolicyName;
        return this;
    }
    
    public ResponsePolicy(){}
}
