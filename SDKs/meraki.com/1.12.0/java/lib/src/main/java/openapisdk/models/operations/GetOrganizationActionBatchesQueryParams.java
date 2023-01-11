package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetOrganizationActionBatchesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=status")
    public GetOrganizationActionBatchesStatusEnum status;
    public GetOrganizationActionBatchesQueryParams withStatus(GetOrganizationActionBatchesStatusEnum status) {
        this.status = status;
        return this;
    }
}