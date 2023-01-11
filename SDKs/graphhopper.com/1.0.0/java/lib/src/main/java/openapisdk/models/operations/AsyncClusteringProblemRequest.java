package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AsyncClusteringProblemRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ClusterRequest request;
    public AsyncClusteringProblemRequest withRequest(openapisdk.models.shared.ClusterRequest request) {
        this.request = request;
        return this;
    }
}