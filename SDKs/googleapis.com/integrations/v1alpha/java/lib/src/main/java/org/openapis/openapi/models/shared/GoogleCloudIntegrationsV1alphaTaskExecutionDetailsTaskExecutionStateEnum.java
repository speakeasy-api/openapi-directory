/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonValue;

/**
 * GoogleCloudIntegrationsV1alphaTaskExecutionDetailsTaskExecutionStateEnum - The execution state of this task.
 */
public enum GoogleCloudIntegrationsV1alphaTaskExecutionDetailsTaskExecutionStateEnum {
    TASK_EXECUTION_STATE_UNSPECIFIED("TASK_EXECUTION_STATE_UNSPECIFIED"),
    PENDING_EXECUTION("PENDING_EXECUTION"),
    IN_PROCESS("IN_PROCESS"),
    SUCCEED("SUCCEED"),
    FAILED("FAILED"),
    FATAL("FATAL"),
    RETRY_ON_HOLD("RETRY_ON_HOLD"),
    SKIPPED("SKIPPED"),
    CANCELLED("CANCELLED"),
    PENDING_ROLLBACK("PENDING_ROLLBACK"),
    ROLLBACK_IN_PROCESS("ROLLBACK_IN_PROCESS"),
    ROLLEDBACK("ROLLEDBACK"),
    SUSPENDED("SUSPENDED");

    @JsonValue
    public final String value;

    private GoogleCloudIntegrationsV1alphaTaskExecutionDetailsTaskExecutionStateEnum(String value) {
        this.value = value;
    }
}
