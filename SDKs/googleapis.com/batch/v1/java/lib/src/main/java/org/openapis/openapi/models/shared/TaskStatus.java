/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * TaskStatus - Status of a task
 */
public class TaskStatus {
    /**
     * Task state
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("state")
    public TaskStatusStateEnum state;

    public TaskStatus withState(TaskStatusStateEnum state) {
        this.state = state;
        return this;
    }
    
    /**
     * Detailed info about why the state is reached.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("statusEvents")
    public StatusEvent[] statusEvents;

    public TaskStatus withStatusEvents(StatusEvent[] statusEvents) {
        this.statusEvents = statusEvents;
        return this;
    }
    
    public TaskStatus(){}
}
