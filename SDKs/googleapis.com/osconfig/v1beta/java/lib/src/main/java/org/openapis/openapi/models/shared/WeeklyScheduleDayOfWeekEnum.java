/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonValue;

/**
 * WeeklyScheduleDayOfWeekEnum - Required. Day of the week.
 */
public enum WeeklyScheduleDayOfWeekEnum {
    DAY_OF_WEEK_UNSPECIFIED("DAY_OF_WEEK_UNSPECIFIED"),
    MONDAY("MONDAY"),
    TUESDAY("TUESDAY"),
    WEDNESDAY("WEDNESDAY"),
    THURSDAY("THURSDAY"),
    FRIDAY("FRIDAY"),
    SATURDAY("SATURDAY"),
    SUNDAY("SUNDAY");

    @JsonValue
    public final String value;

    private WeeklyScheduleDayOfWeekEnum(String value) {
        this.value = value;
    }
}
