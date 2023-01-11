package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateOrganizationActionBatchPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=organizationId")
    public String organizationId;
    public CreateOrganizationActionBatchPathParams withOrganizationId(String organizationId) {
        this.organizationId = organizationId;
        return this;
    }
}