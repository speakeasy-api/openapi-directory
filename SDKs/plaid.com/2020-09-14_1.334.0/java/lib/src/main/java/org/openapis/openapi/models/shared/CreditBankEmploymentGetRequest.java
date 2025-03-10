/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * CreditBankEmploymentGetRequest - CreditBankEmploymentGetRequest defines the request schema for `/beta/credit/v1/bank_employment/get`.
 */
public class CreditBankEmploymentGetRequest {
    /**
     * Your Plaid API `client_id`. The `client_id` is required and may be provided either in the `PLAID-CLIENT-ID` header or as part of a request body.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("client_id")
    public String clientId;
    public CreditBankEmploymentGetRequest withClientId(String clientId) {
        this.clientId = clientId;
        return this;
    }
    
    /**
     * Your Plaid API `secret`. The `secret` is required and may be provided either in the `PLAID-SECRET` header or as part of a request body.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("secret")
    public String secret;
    public CreditBankEmploymentGetRequest withSecret(String secret) {
        this.secret = secret;
        return this;
    }
    
    /**
     * The user token associated with the User data is being requested for.
     */
    @JsonProperty("user_token")
    public String userToken;
    public CreditBankEmploymentGetRequest withUserToken(String userToken) {
        this.userToken = userToken;
        return this;
    }
    
}
