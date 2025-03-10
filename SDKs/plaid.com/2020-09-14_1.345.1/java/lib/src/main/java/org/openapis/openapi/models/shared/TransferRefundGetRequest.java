/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * TransferRefundGetRequest - Defines the request schema for `/transfer/refund/get`
 */
public class TransferRefundGetRequest {
    /**
     * Your Plaid API `client_id`. The `client_id` is required and may be provided either in the `PLAID-CLIENT-ID` header or as part of a request body.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("client_id")
    public String clientId;

    public TransferRefundGetRequest withClientId(String clientId) {
        this.clientId = clientId;
        return this;
    }
    
    /**
     * Plaid\u2019s unique identifier for a refund.
     */
    @JsonProperty("refund_id")
    public String refundId;

    public TransferRefundGetRequest withRefundId(String refundId) {
        this.refundId = refundId;
        return this;
    }
    
    /**
     * Your Plaid API `secret`. The `secret` is required and may be provided either in the `PLAID-SECRET` header or as part of a request body.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("secret")
    public String secret;

    public TransferRefundGetRequest withSecret(String secret) {
        this.secret = secret;
        return this;
    }
    
    public TransferRefundGetRequest(@JsonProperty("refund_id") String refundId) {
        this.refundId = refundId;
  }
}
