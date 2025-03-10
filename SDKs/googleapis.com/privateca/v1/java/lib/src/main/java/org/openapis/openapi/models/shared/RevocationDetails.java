/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * RevocationDetails - Describes fields that are relavent to the revocation of a Certificate.
 */
public class RevocationDetails {
    /**
     * Indicates why a Certificate was revoked.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("revocationState")
    public RevocationDetailsRevocationStateEnum revocationState;

    public RevocationDetails withRevocationState(RevocationDetailsRevocationStateEnum revocationState) {
        this.revocationState = revocationState;
        return this;
    }
    
    /**
     * The time at which this Certificate was revoked.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("revocationTime")
    public String revocationTime;

    public RevocationDetails withRevocationTime(String revocationTime) {
        this.revocationTime = revocationTime;
        return this;
    }
    
    public RevocationDetails(){}
}
