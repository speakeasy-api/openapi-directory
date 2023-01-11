package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateOrganizationActionBatchPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=actionBatchId")
    public String actionBatchId;
    public UpdateOrganizationActionBatchPathParams withActionBatchId(String actionBatchId) {
        this.actionBatchId = actionBatchId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=organizationId")
    public String organizationId;
    public UpdateOrganizationActionBatchPathParams withOrganizationId(String organizationId) {
        this.organizationId = organizationId;
        return this;
    }
}