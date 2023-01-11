package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetOrganizationConfigTemplateSwitchProfilePortPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=configTemplateId")
    public String configTemplateId;
    public GetOrganizationConfigTemplateSwitchProfilePortPathParams withConfigTemplateId(String configTemplateId) {
        this.configTemplateId = configTemplateId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=organizationId")
    public String organizationId;
    public GetOrganizationConfigTemplateSwitchProfilePortPathParams withOrganizationId(String organizationId) {
        this.organizationId = organizationId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=portId")
    public String portId;
    public GetOrganizationConfigTemplateSwitchProfilePortPathParams withPortId(String portId) {
        this.portId = portId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=profileId")
    public String profileId;
    public GetOrganizationConfigTemplateSwitchProfilePortPathParams withProfileId(String profileId) {
        this.profileId = profileId;
        return this;
    }
}