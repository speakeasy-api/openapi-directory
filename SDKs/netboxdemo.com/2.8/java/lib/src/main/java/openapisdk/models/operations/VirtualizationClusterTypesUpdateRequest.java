package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class VirtualizationClusterTypesUpdateRequest {
    public VirtualizationClusterTypesUpdatePathParams pathParams;
    public VirtualizationClusterTypesUpdateRequest withPathParams(VirtualizationClusterTypesUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ClusterTypeInput request;
    public VirtualizationClusterTypesUpdateRequest withRequest(openapisdk.models.shared.ClusterTypeInput request) {
        this.request = request;
        return this;
    }
}