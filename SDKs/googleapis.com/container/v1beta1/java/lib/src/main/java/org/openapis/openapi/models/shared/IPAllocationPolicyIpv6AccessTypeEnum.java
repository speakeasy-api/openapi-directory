/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonValue;

/**
 * IPAllocationPolicyIpv6AccessTypeEnum - The ipv6 access type (internal or external) when create_subnetwork is true
 */
public enum IPAllocationPolicyIpv6AccessTypeEnum {
    IPV6_ACCESS_TYPE_UNSPECIFIED("IPV6_ACCESS_TYPE_UNSPECIFIED"),
    INTERNAL("INTERNAL"),
    EXTERNAL("EXTERNAL");

    @JsonValue
    public final String value;

    private IPAllocationPolicyIpv6AccessTypeEnum(String value) {
        this.value = value;
    }
}
