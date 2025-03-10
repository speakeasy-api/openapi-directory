/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonValue;

/**
 * VideoStatusFailureReasonEnum - This value explains why a video failed to upload. This property is only present if the uploadStatus property indicates that the upload failed.
 */
public enum VideoStatusFailureReasonEnum {
    CONVERSION("conversion"),
    INVALID_FILE("invalidFile"),
    EMPTY_FILE("emptyFile"),
    TOO_SMALL("tooSmall"),
    CODEC("codec"),
    UPLOAD_ABORTED("uploadAborted");

    @JsonValue
    public final String value;

    private VideoStatusFailureReasonEnum(String value) {
        this.value = value;
    }
}
