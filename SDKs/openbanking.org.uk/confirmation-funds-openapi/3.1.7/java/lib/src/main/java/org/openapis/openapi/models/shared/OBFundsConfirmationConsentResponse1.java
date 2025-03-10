/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * OBFundsConfirmationConsentResponse1 - Funds Confirmation Consent Created
 */
public class OBFundsConfirmationConsentResponse1 {
    @JsonProperty("Data")
    public OBFundsConfirmationConsentResponse1Data data;

    public OBFundsConfirmationConsentResponse1 withData(OBFundsConfirmationConsentResponse1Data data) {
        this.data = data;
        return this;
    }
    
    /**
     * Links relevant to the payload
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Links")
    public Links links;

    public OBFundsConfirmationConsentResponse1 withLinks(Links links) {
        this.links = links;
        return this;
    }
    
    /**
     * Meta Data relevant to the payload
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Meta")
    public Meta meta;

    public OBFundsConfirmationConsentResponse1 withMeta(Meta meta) {
        this.meta = meta;
        return this;
    }
    
    public OBFundsConfirmationConsentResponse1(@JsonProperty("Data") OBFundsConfirmationConsentResponse1Data data) {
        this.data = data;
  }
}
