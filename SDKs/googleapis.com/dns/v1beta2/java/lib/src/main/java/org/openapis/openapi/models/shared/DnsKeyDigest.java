/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

public class DnsKeyDigest {
    /**
     * The base-16 encoded bytes of this digest. Suitable for use in a DS resource record.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("digest")
    public String digest;

    public DnsKeyDigest withDigest(String digest) {
        this.digest = digest;
        return this;
    }
    
    /**
     * Specifies the algorithm used to calculate this digest.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public DnsKeyDigestTypeEnum type;

    public DnsKeyDigest withType(DnsKeyDigestTypeEnum type) {
        this.type = type;
        return this;
    }
    
    public DnsKeyDigest(){}
}
