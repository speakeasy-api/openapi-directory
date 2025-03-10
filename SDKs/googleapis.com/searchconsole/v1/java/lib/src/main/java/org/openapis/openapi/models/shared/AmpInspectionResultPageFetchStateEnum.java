/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonValue;

/**
 * AmpInspectionResultPageFetchStateEnum - Whether or not Google could fetch the AMP.
 */
public enum AmpInspectionResultPageFetchStateEnum {
    PAGE_FETCH_STATE_UNSPECIFIED("PAGE_FETCH_STATE_UNSPECIFIED"),
    SUCCESSFUL("SUCCESSFUL"),
    SOFT404("SOFT_404"),
    BLOCKED_ROBOTS_TXT("BLOCKED_ROBOTS_TXT"),
    NOT_FOUND("NOT_FOUND"),
    ACCESS_DENIED("ACCESS_DENIED"),
    SERVER_ERROR("SERVER_ERROR"),
    REDIRECT_ERROR("REDIRECT_ERROR"),
    ACCESS_FORBIDDEN("ACCESS_FORBIDDEN"),
    BLOCKED4_XX("BLOCKED_4XX"),
    INTERNAL_CRAWL_ERROR("INTERNAL_CRAWL_ERROR"),
    INVALID_URL("INVALID_URL");

    @JsonValue
    public final String value;

    private AmpInspectionResultPageFetchStateEnum(String value) {
        this.value = value;
    }
}
