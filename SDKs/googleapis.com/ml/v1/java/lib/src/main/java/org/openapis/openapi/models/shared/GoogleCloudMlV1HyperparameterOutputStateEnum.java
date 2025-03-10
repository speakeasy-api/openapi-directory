/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonValue;

/**
 * GoogleCloudMlV1HyperparameterOutputStateEnum - Output only. The detailed state of the trial.
 */
public enum GoogleCloudMlV1HyperparameterOutputStateEnum {
    STATE_UNSPECIFIED("STATE_UNSPECIFIED"),
    QUEUED("QUEUED"),
    PREPARING("PREPARING"),
    RUNNING("RUNNING"),
    SUCCEEDED("SUCCEEDED"),
    FAILED("FAILED"),
    CANCELLING("CANCELLING"),
    CANCELLED("CANCELLED");

    @JsonValue
    public final String value;

    private GoogleCloudMlV1HyperparameterOutputStateEnum(String value) {
        this.value = value;
    }
}
