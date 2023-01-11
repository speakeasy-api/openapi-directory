package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class VirtualizationClusterGroupsPartialUpdateRequest {
    public VirtualizationClusterGroupsPartialUpdatePathParams pathParams;
    public VirtualizationClusterGroupsPartialUpdateRequest withPathParams(VirtualizationClusterGroupsPartialUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ClusterGroupInput request;
    public VirtualizationClusterGroupsPartialUpdateRequest withRequest(openapisdk.models.shared.ClusterGroupInput request) {
        this.request = request;
        return this;
    }
}