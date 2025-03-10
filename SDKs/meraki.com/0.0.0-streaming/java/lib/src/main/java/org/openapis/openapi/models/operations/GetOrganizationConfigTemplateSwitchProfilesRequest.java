/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.openapis.openapi.utils.SpeakeasyMetadata;

public class GetOrganizationConfigTemplateSwitchProfilesRequest {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=configTemplateId")
    public String configTemplateId;

    public GetOrganizationConfigTemplateSwitchProfilesRequest withConfigTemplateId(String configTemplateId) {
        this.configTemplateId = configTemplateId;
        return this;
    }
    
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=organizationId")
    public String organizationId;

    public GetOrganizationConfigTemplateSwitchProfilesRequest withOrganizationId(String organizationId) {
        this.organizationId = organizationId;
        return this;
    }
    
    public GetOrganizationConfigTemplateSwitchProfilesRequest(@JsonProperty("configTemplateId") String configTemplateId, @JsonProperty("organizationId") String organizationId) {
        this.configTemplateId = configTemplateId;
        this.organizationId = organizationId;
  }
}
