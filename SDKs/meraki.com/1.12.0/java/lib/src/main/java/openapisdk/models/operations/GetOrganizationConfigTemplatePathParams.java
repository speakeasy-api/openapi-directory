package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetOrganizationConfigTemplatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=configTemplateId")
    public String configTemplateId;
    public GetOrganizationConfigTemplatePathParams withConfigTemplateId(String configTemplateId) {
        this.configTemplateId = configTemplateId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=organizationId")
    public String organizationId;
    public GetOrganizationConfigTemplatePathParams withOrganizationId(String organizationId) {
        this.organizationId = organizationId;
        return this;
    }
}