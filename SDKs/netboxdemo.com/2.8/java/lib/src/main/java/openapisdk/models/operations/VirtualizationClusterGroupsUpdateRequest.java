package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class VirtualizationClusterGroupsUpdateRequest {
    public VirtualizationClusterGroupsUpdatePathParams pathParams;
    public VirtualizationClusterGroupsUpdateRequest withPathParams(VirtualizationClusterGroupsUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ClusterGroupInput request;
    public VirtualizationClusterGroupsUpdateRequest withRequest(openapisdk.models.shared.ClusterGroupInput request) {
        this.request = request;
        return this;
    }
}