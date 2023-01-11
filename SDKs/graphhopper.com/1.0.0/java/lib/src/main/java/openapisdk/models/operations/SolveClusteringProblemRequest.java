package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SolveClusteringProblemRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ClusterRequest request;
    public SolveClusteringProblemRequest withRequest(openapisdk.models.shared.ClusterRequest request) {
        this.request = request;
        return this;
    }
}