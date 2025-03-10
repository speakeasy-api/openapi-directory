/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.openapis.openapi.utils.SpeakeasyMetadata;

public class FetchExportConfigurationRequest {
    /**
     * The type of communication \u2013 Messages, Calls, Conferences, and Participants
     */
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ResourceType")
    public String resourceType;

    public FetchExportConfigurationRequest withResourceType(String resourceType) {
        this.resourceType = resourceType;
        return this;
    }
    
    public FetchExportConfigurationRequest(@JsonProperty("ResourceType") String resourceType) {
        this.resourceType = resourceType;
  }
}
