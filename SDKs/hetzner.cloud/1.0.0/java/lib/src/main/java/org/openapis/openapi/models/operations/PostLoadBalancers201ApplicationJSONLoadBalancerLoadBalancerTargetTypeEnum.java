/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonValue;

/**
 * PostLoadBalancers201ApplicationJSONLoadBalancerLoadBalancerTargetTypeEnum - Type of the resource
 */
public enum PostLoadBalancers201ApplicationJSONLoadBalancerLoadBalancerTargetTypeEnum {
    SERVER("server"),
    LABEL_SELECTOR("label_selector"),
    IP("ip");

    @JsonValue
    public final String value;

    private PostLoadBalancers201ApplicationJSONLoadBalancerLoadBalancerTargetTypeEnum(String value) {
        this.value = value;
    }
}
