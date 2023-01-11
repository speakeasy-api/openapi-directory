package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class VirtualizationClusterTypesCreateRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ClusterTypeInput request;
    public VirtualizationClusterTypesCreateRequest withRequest(openapisdk.models.shared.ClusterTypeInput request) {
        this.request = request;
        return this;
    }
}