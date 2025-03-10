/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonValue;

/**
 * DfareportingFloodlightActivitiesListFloodlightActivityGroupTypeEnum - Select only floodlight activities with the specified floodlight activity group type.
 */
public enum DfareportingFloodlightActivitiesListFloodlightActivityGroupTypeEnum {
    COUNTER("COUNTER"),
    SALE("SALE");

    @JsonValue
    public final String value;

    private DfareportingFloodlightActivitiesListFloodlightActivityGroupTypeEnum(String value) {
        this.value = value;
    }
}
