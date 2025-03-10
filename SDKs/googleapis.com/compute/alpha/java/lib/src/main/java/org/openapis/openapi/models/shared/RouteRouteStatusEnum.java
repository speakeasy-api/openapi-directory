/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonValue;

/**
 * RouteRouteStatusEnum - [Output only] The status of the route.
 */
public enum RouteRouteStatusEnum {
    ACTIVE("ACTIVE"),
    DROPPED("DROPPED"),
    INACTIVE("INACTIVE"),
    PENDING("PENDING");

    @JsonValue
    public final String value;

    private RouteRouteStatusEnum(String value) {
        this.value = value;
    }
}
