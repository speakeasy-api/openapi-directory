/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonValue;

/**
 * DayAndTimeAssignedTargetingOptionDetailsTimeZoneResolutionEnum - Required. The mechanism used to determine which timezone to use for this day and time targeting setting.
 */
public enum DayAndTimeAssignedTargetingOptionDetailsTimeZoneResolutionEnum {
    TIME_ZONE_RESOLUTION_UNSPECIFIED("TIME_ZONE_RESOLUTION_UNSPECIFIED"),
    TIME_ZONE_RESOLUTION_END_USER("TIME_ZONE_RESOLUTION_END_USER"),
    TIME_ZONE_RESOLUTION_ADVERTISER("TIME_ZONE_RESOLUTION_ADVERTISER");

    @JsonValue
    public final String value;

    private DayAndTimeAssignedTargetingOptionDetailsTimeZoneResolutionEnum(String value) {
        this.value = value;
    }
}
