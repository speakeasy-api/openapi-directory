package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class VirtualizationClusterTypesPartialUpdateRequest {
    public VirtualizationClusterTypesPartialUpdatePathParams pathParams;
    public VirtualizationClusterTypesPartialUpdateRequest withPathParams(VirtualizationClusterTypesPartialUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ClusterTypeInput request;
    public VirtualizationClusterTypesPartialUpdateRequest withRequest(openapisdk.models.shared.ClusterTypeInput request) {
        this.request = request;
        return this;
    }
}