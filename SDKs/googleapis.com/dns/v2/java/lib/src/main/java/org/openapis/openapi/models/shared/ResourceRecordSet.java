/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ResourceRecordSet - A unit of data that is returned by the DNS servers.
 */
public class ResourceRecordSet {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;

    public ResourceRecordSet withKind(String kind) {
        this.kind = kind;
        return this;
    }
    
    /**
     * For example, www.example.com.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;

    public ResourceRecordSet withName(String name) {
        this.name = name;
        return this;
    }
    
    /**
     * A RRSetRoutingPolicy represents ResourceRecordSet data that is returned dynamically with the response varying based on configured properties such as geolocation or by weighted random selection.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("routingPolicy")
    public RRSetRoutingPolicy routingPolicy;

    public ResourceRecordSet withRoutingPolicy(RRSetRoutingPolicy routingPolicy) {
        this.routingPolicy = routingPolicy;
        return this;
    }
    
    /**
     * As defined in RFC 1035 (section 5) and RFC 1034 (section 3.6.1) -- see examples.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rrdatas")
    public String[] rrdatas;

    public ResourceRecordSet withRrdatas(String[] rrdatas) {
        this.rrdatas = rrdatas;
        return this;
    }
    
    /**
     * As defined in RFC 4034 (section 3.2).
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("signatureRrdatas")
    public String[] signatureRrdatas;

    public ResourceRecordSet withSignatureRrdatas(String[] signatureRrdatas) {
        this.signatureRrdatas = signatureRrdatas;
        return this;
    }
    
    /**
     * Number of seconds that this ResourceRecordSet can be cached by resolvers.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ttl")
    public Integer ttl;

    public ResourceRecordSet withTtl(Integer ttl) {
        this.ttl = ttl;
        return this;
    }
    
    /**
     * The identifier of a supported record type. See the list of Supported DNS record types.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;

    public ResourceRecordSet withType(String type) {
        this.type = type;
        return this;
    }
    
    public ResourceRecordSet(){}
}
