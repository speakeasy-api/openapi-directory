/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonValue;

/**
 * DriveFilesPatchModifiedDateBehaviorEnum - Determines the behavior in which modifiedDate is updated. This overrides setModifiedDate.
 */
public enum DriveFilesPatchModifiedDateBehaviorEnum {
    FROM_BODY("fromBody"),
    FROM_BODY_IF_NEEDED("fromBodyIfNeeded"),
    FROM_BODY_OR_NOW("fromBodyOrNow"),
    NO_CHANGE("noChange"),
    NOW("now"),
    NOW_IF_NEEDED("nowIfNeeded");

    @JsonValue
    public final String value;

    private DriveFilesPatchModifiedDateBehaviorEnum(String value) {
        this.value = value;
    }
}
