package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetNetworkSmTargetGroupsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=withDetails")
    public Boolean withDetails;
    public GetNetworkSmTargetGroupsQueryParams withWithDetails(Boolean withDetails) {
        this.withDetails = withDetails;
        return this;
    }
}