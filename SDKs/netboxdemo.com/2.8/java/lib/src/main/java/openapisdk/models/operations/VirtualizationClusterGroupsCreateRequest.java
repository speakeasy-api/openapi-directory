package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class VirtualizationClusterGroupsCreateRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ClusterGroupInput request;
    public VirtualizationClusterGroupsCreateRequest withRequest(openapisdk.models.shared.ClusterGroupInput request) {
        this.request = request;
        return this;
    }
}