/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.openapis.openapi.utils.SpeakeasyMetadata;

public class GetTaskLogRequest {
    /**
     * UUID of the task
     */
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=task_id")
    public String taskId;

    public GetTaskLogRequest withTaskId(String taskId) {
        this.taskId = taskId;
        return this;
    }
    
    public GetTaskLogRequest(@JsonProperty("task_id") String taskId) {
        this.taskId = taskId;
  }
}
