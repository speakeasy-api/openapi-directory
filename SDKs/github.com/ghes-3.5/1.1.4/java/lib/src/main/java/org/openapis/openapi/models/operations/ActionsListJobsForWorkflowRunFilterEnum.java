/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonValue;

/**
 * ActionsListJobsForWorkflowRunFilterEnum - Filters jobs by their `completed_at` timestamp. `latest` returns jobs from the most recent execution of the workflow run. `all` returns all jobs for a workflow run, including from old executions of the workflow run.
 */
public enum ActionsListJobsForWorkflowRunFilterEnum {
    LATEST("latest"),
    ALL("all");

    @JsonValue
    public final String value;

    private ActionsListJobsForWorkflowRunFilterEnum(String value) {
        this.value = value;
    }
}
