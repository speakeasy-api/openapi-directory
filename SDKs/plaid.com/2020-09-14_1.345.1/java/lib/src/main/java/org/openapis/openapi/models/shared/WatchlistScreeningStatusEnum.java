/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonValue;

/**
 * WatchlistScreeningStatusEnum - A status enum indicating whether a screening is still pending review, has been rejected, or has been cleared.
 */
public enum WatchlistScreeningStatusEnum {
    REJECTED("rejected"),
    PENDING_REVIEW("pending_review"),
    CLEARED("cleared");

    @JsonValue
    public final String value;

    private WatchlistScreeningStatusEnum(String value) {
        this.value = value;
    }
}
