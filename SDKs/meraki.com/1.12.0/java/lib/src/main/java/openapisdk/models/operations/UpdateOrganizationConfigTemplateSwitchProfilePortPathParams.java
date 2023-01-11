package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateOrganizationConfigTemplateSwitchProfilePortPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=configTemplateId")
    public String configTemplateId;
    public UpdateOrganizationConfigTemplateSwitchProfilePortPathParams withConfigTemplateId(String configTemplateId) {
        this.configTemplateId = configTemplateId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=organizationId")
    public String organizationId;
    public UpdateOrganizationConfigTemplateSwitchProfilePortPathParams withOrganizationId(String organizationId) {
        this.organizationId = organizationId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=portId")
    public String portId;
    public UpdateOrganizationConfigTemplateSwitchProfilePortPathParams withPortId(String portId) {
        this.portId = portId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=profileId")
    public String profileId;
    public UpdateOrganizationConfigTemplateSwitchProfilePortPathParams withProfileId(String profileId) {
        this.profileId = profileId;
        return this;
    }
}