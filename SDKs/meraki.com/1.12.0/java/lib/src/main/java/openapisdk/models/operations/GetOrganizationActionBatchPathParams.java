package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetOrganizationActionBatchPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=actionBatchId")
    public String actionBatchId;
    public GetOrganizationActionBatchPathParams withActionBatchId(String actionBatchId) {
        this.actionBatchId = actionBatchId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=organizationId")
    public String organizationId;
    public GetOrganizationActionBatchPathParams withOrganizationId(String organizationId) {
        this.organizationId = organizationId;
        return this;
    }
}