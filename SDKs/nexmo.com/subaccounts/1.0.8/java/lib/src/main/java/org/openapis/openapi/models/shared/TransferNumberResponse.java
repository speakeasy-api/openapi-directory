/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * TransferNumberResponse - Number transfer response
 */
public class TransferNumberResponse {
    /**
     * The two character country code in ISO 3166-1 alpha-2 format
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("country")
    public String country;

    public TransferNumberResponse withCountry(String country) {
        this.country = country;
        return this;
    }
    
    /**
     * Account the number is transferred from
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("from")
    public String from;

    public TransferNumberResponse withFrom(String from) {
        this.from = from;
        return this;
    }
    
    /**
     * Number transfered
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("number")
    public String number;

    public TransferNumberResponse withNumber(String number) {
        this.number = number;
        return this;
    }
    
    /**
     * Account the number is transferred to
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("to")
    public String to;

    public TransferNumberResponse withTo(String to) {
        this.to = to;
        return this;
    }
    
    public TransferNumberResponse(){}
}
