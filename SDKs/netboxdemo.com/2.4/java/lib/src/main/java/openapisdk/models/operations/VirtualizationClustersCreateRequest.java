package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class VirtualizationClustersCreateRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.WritableClusterInput request;
    public VirtualizationClustersCreateRequest withRequest(openapisdk.models.shared.WritableClusterInput request) {
        this.request = request;
        return this;
    }
}