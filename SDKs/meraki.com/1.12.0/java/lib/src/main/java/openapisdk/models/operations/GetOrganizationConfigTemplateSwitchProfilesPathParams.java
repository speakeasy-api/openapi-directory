package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetOrganizationConfigTemplateSwitchProfilesPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=configTemplateId")
    public String configTemplateId;
    public GetOrganizationConfigTemplateSwitchProfilesPathParams withConfigTemplateId(String configTemplateId) {
        this.configTemplateId = configTemplateId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=organizationId")
    public String organizationId;
    public GetOrganizationConfigTemplateSwitchProfilesPathParams withOrganizationId(String organizationId) {
        this.organizationId = organizationId;
        return this;
    }
}