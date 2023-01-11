package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class VirtualizationClustersPartialUpdateRequest {
    public VirtualizationClustersPartialUpdatePathParams pathParams;
    public VirtualizationClustersPartialUpdateRequest withPathParams(VirtualizationClustersPartialUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.WritableClusterInput request;
    public VirtualizationClustersPartialUpdateRequest withRequest(openapisdk.models.shared.WritableClusterInput request) {
        this.request = request;
        return this;
    }
}