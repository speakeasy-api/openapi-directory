/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PutPrimaryIpsIdPrimaryIPResponsePrimaryIPDnsPtr {
    /**
     * DNS pointer for the specific IP address
     */
    @JsonProperty("dns_ptr")
    public String dnsPtr;

    public PutPrimaryIpsIdPrimaryIPResponsePrimaryIPDnsPtr withDnsPtr(String dnsPtr) {
        this.dnsPtr = dnsPtr;
        return this;
    }
    
    /**
     * Single IPv4 or IPv6 address
     */
    @JsonProperty("ip")
    public String ip;

    public PutPrimaryIpsIdPrimaryIPResponsePrimaryIPDnsPtr withIp(String ip) {
        this.ip = ip;
        return this;
    }
    
    public PutPrimaryIpsIdPrimaryIPResponsePrimaryIPDnsPtr(@JsonProperty("dns_ptr") String dnsPtr, @JsonProperty("ip") String ip) {
        this.dnsPtr = dnsPtr;
        this.ip = ip;
  }
}
