package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class VirtualizationClustersUpdateRequest {
    public VirtualizationClustersUpdatePathParams pathParams;
    public VirtualizationClustersUpdateRequest withPathParams(VirtualizationClustersUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.WritableClusterInput request;
    public VirtualizationClustersUpdateRequest withRequest(openapisdk.models.shared.WritableClusterInput request) {
        this.request = request;
        return this;
    }
}