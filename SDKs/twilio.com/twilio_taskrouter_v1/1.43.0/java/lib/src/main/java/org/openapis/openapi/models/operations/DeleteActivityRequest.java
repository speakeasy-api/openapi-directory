/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.openapis.openapi.utils.SpeakeasyMetadata;

public class DeleteActivityRequest {
    /**
     * The SID of the Activity resource to delete.
     */
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=Sid")
    public String sid;

    public DeleteActivityRequest withSid(String sid) {
        this.sid = sid;
        return this;
    }
    
    /**
     * The SID of the Workspace with the Activity resources to delete.
     */
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=WorkspaceSid")
    public String workspaceSid;

    public DeleteActivityRequest withWorkspaceSid(String workspaceSid) {
        this.workspaceSid = workspaceSid;
        return this;
    }
    
    public DeleteActivityRequest(@JsonProperty("Sid") String sid, @JsonProperty("WorkspaceSid") String workspaceSid) {
        this.sid = sid;
        this.workspaceSid = workspaceSid;
  }
}
