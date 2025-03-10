/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonValue;

/**
 * QueryOracleDbV1SLAAssignmentEnum - Limits the response to Oracle databases that are protected by the specified type of SLA Domain assignment.
 */
public enum QueryOracleDbV1SLAAssignmentEnum {
    DERIVED("Derived"),
    DIRECT("Direct"),
    UNASSIGNED("Unassigned");

    @JsonValue
    public final String value;

    private QueryOracleDbV1SLAAssignmentEnum(String value) {
        this.value = value;
    }
}
