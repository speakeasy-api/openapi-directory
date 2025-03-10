/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * TransferLocationRequest - Request message for Locations.TransferLocation.
 */
public class TransferLocationRequest {
    /**
     * Name of the account resource to transfer the location to (for example, "accounts/8675309").
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("toAccount")
    public String toAccount;

    public TransferLocationRequest withToAccount(String toAccount) {
        this.toAccount = toAccount;
        return this;
    }
    
    public TransferLocationRequest(){}
}
