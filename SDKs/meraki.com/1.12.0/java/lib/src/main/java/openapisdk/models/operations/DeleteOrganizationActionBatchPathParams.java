package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteOrganizationActionBatchPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=actionBatchId")
    public String actionBatchId;
    public DeleteOrganizationActionBatchPathParams withActionBatchId(String actionBatchId) {
        this.actionBatchId = actionBatchId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=organizationId")
    public String organizationId;
    public DeleteOrganizationActionBatchPathParams withOrganizationId(String organizationId) {
        this.organizationId = organizationId;
        return this;
    }
}