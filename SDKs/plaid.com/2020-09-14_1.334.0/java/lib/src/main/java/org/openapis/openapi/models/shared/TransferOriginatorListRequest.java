/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * TransferOriginatorListRequest - Defines the request schema for `/transfer/originator/list`
 */
public class TransferOriginatorListRequest {
    /**
     * Your Plaid API `client_id`. The `client_id` is required and may be provided either in the `PLAID-CLIENT-ID` header or as part of a request body.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("client_id")
    public String clientId;
    public TransferOriginatorListRequest withClientId(String clientId) {
        this.clientId = clientId;
        return this;
    }
    
    /**
     * The maximum number of originators to return.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("count")
    public Long count;
    public TransferOriginatorListRequest withCount(Long count) {
        this.count = count;
        return this;
    }
    
    /**
     * The number of originators to skip before returning results.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("offset")
    public Long offset;
    public TransferOriginatorListRequest withOffset(Long offset) {
        this.offset = offset;
        return this;
    }
    
    /**
     * Your Plaid API `secret`. The `secret` is required and may be provided either in the `PLAID-SECRET` header or as part of a request body.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("secret")
    public String secret;
    public TransferOriginatorListRequest withSecret(String secret) {
        this.secret = secret;
        return this;
    }
    
}
