/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * SbomReferenceIntotoPredicate - A predicate which describes the SBOM being referenced.
 */
public class SbomReferenceIntotoPredicate {
    /**
     * A map of algorithm to digest of the contents of the SBOM.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("digest")
    public java.util.Map<String, String> digest;

    public SbomReferenceIntotoPredicate withDigest(java.util.Map<String, String> digest) {
        this.digest = digest;
        return this;
    }
    
    /**
     * The location of the SBOM.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("location")
    public String location;

    public SbomReferenceIntotoPredicate withLocation(String location) {
        this.location = location;
        return this;
    }
    
    /**
     * The mime type of the SBOM.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mimeType")
    public String mimeType;

    public SbomReferenceIntotoPredicate withMimeType(String mimeType) {
        this.mimeType = mimeType;
        return this;
    }
    
    /**
     * The person or system referring this predicate to the consumer.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("referrerId")
    public String referrerId;

    public SbomReferenceIntotoPredicate withReferrerId(String referrerId) {
        this.referrerId = referrerId;
        return this;
    }
    
    public SbomReferenceIntotoPredicate(){}
}
