/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.openapis.openapi.utils.SpeakeasyMetadata;

public class GetFilesRequest {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=project_id")
    public String projectId;

    public GetFilesRequest withProjectId(String projectId) {
        this.projectId = projectId;
        return this;
    }
    
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=workgroup_id")
    public String workgroupId;

    public GetFilesRequest withWorkgroupId(String workgroupId) {
        this.workgroupId = workgroupId;
        return this;
    }
    
    public GetFilesRequest(@JsonProperty("project_id") String projectId, @JsonProperty("workgroup_id") String workgroupId) {
        this.projectId = projectId;
        this.workgroupId = workgroupId;
  }
}
