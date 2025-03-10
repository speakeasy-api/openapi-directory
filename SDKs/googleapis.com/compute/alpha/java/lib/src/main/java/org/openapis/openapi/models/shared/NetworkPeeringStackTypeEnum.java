/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonValue;

/**
 * NetworkPeeringStackTypeEnum - Which IP version(s) of traffic and routes are allowed to be imported or exported between peer networks. The default value is IPV4_ONLY.
 */
public enum NetworkPeeringStackTypeEnum {
    IPV4_IPV6("IPV4_IPV6"),
    IPV4_ONLY("IPV4_ONLY");

    @JsonValue
    public final String value;

    private NetworkPeeringStackTypeEnum(String value) {
        this.value = value;
    }
}
