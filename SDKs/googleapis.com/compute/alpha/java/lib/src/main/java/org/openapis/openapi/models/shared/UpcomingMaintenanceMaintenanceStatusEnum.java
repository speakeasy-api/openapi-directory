/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonValue;

public enum UpcomingMaintenanceMaintenanceStatusEnum {
    ONGOING("ONGOING"),
    PENDING("PENDING"),
    UNKNOWN("UNKNOWN");

    @JsonValue
    public final String value;

    private UpcomingMaintenanceMaintenanceStatusEnum(String value) {
        this.value = value;
    }
}
