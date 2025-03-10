/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * PostServersIdActionsDetachIsoActionResponse - The `action` key in the reply contains an Action object with this structure
 */
public class PostServersIdActionsDetachIsoActionResponse {
    @JsonProperty("action")
    public PostServersIdActionsDetachIsoActionResponseAction action;

    public PostServersIdActionsDetachIsoActionResponse withAction(PostServersIdActionsDetachIsoActionResponseAction action) {
        this.action = action;
        return this;
    }
    
    public PostServersIdActionsDetachIsoActionResponse(@JsonProperty("action") PostServersIdActionsDetachIsoActionResponseAction action) {
        this.action = action;
  }
}
