/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * AcmeTxtRecordInput - The TXT record message that represents an ACME DNS-01 challenge.
 */
public class AcmeTxtRecordInput {
    /**
     * Holds the ACME challenge data put in the TXT record. This will be checked to be a valid TXT record data entry.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("digest")
    public String digest;

    public AcmeTxtRecordInput withDigest(String digest) {
        this.digest = digest;
        return this;
    }
    
    /**
     * The domain/subdomain for the record. In a request, this MAY be Unicode or Punycode. In a response, this will be in Unicode. The fqdn MUST contain the root_domain field on the request.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fqdn")
    public String fqdn;

    public AcmeTxtRecordInput withFqdn(String fqdn) {
        this.fqdn = fqdn;
        return this;
    }
    
    public AcmeTxtRecordInput(){}
}
