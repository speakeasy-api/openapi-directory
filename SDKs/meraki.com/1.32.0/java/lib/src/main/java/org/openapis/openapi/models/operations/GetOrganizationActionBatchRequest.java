/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.openapis.openapi.utils.SpeakeasyMetadata;

public class GetOrganizationActionBatchRequest {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=actionBatchId")
    public String actionBatchId;

    public GetOrganizationActionBatchRequest withActionBatchId(String actionBatchId) {
        this.actionBatchId = actionBatchId;
        return this;
    }
    
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=organizationId")
    public String organizationId;

    public GetOrganizationActionBatchRequest withOrganizationId(String organizationId) {
        this.organizationId = organizationId;
        return this;
    }
    
    public GetOrganizationActionBatchRequest(@JsonProperty("actionBatchId") String actionBatchId, @JsonProperty("organizationId") String organizationId) {
        this.actionBatchId = actionBatchId;
        this.organizationId = organizationId;
  }
}
