/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ResponsePolicyRulesUpdateResponse - Successful response
 */
public class ResponsePolicyRulesUpdateResponse {
    /**
     * Elements common to every response.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("header")
    public ResponseHeader header;

    public ResponsePolicyRulesUpdateResponse withHeader(ResponseHeader header) {
        this.header = header;
        return this;
    }
    
    /**
     * A Response Policy Rule is a selector that applies its behavior to queries that match the selector. Selectors are DNS names, which may be wildcards or exact matches. Each DNS query subject to a Response Policy matches at most one ResponsePolicyRule, as identified by the dns_name field with the longest matching suffix.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("responsePolicyRule")
    public ResponsePolicyRule responsePolicyRule;

    public ResponsePolicyRulesUpdateResponse withResponsePolicyRule(ResponsePolicyRule responsePolicyRule) {
        this.responsePolicyRule = responsePolicyRule;
        return this;
    }
    
    public ResponsePolicyRulesUpdateResponse(){}
}
