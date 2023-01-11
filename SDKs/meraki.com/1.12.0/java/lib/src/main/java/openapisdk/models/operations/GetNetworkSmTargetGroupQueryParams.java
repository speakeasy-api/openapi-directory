package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetNetworkSmTargetGroupQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=withDetails")
    public Boolean withDetails;
    public GetNetworkSmTargetGroupQueryParams withWithDetails(Boolean withDetails) {
        this.withDetails = withDetails;
        return this;
    }
}