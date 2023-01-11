package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteOrganizationConfigTemplatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=configTemplateId")
    public String configTemplateId;
    public DeleteOrganizationConfigTemplatePathParams withConfigTemplateId(String configTemplateId) {
        this.configTemplateId = configTemplateId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=organizationId")
    public String organizationId;
    public DeleteOrganizationConfigTemplatePathParams withOrganizationId(String organizationId) {
        this.organizationId = organizationId;
        return this;
    }
}