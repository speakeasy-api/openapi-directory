/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * BankTransferCancelRequest - Defines the request schema for `/bank_transfer/cancel`
 */
public class BankTransferCancelRequest {
    /**
     * Plaid\u2019s unique identifier for a bank transfer.
     */
    @JsonProperty("bank_transfer_id")
    public String bankTransferId;

    public BankTransferCancelRequest withBankTransferId(String bankTransferId) {
        this.bankTransferId = bankTransferId;
        return this;
    }
    
    /**
     * Your Plaid API `client_id`. The `client_id` is required and may be provided either in the `PLAID-CLIENT-ID` header or as part of a request body.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("client_id")
    public String clientId;

    public BankTransferCancelRequest withClientId(String clientId) {
        this.clientId = clientId;
        return this;
    }
    
    /**
     * Your Plaid API `secret`. The `secret` is required and may be provided either in the `PLAID-SECRET` header or as part of a request body.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("secret")
    public String secret;

    public BankTransferCancelRequest withSecret(String secret) {
        this.secret = secret;
        return this;
    }
    
    public BankTransferCancelRequest(@JsonProperty("bank_transfer_id") String bankTransferId) {
        this.bankTransferId = bankTransferId;
  }
}
