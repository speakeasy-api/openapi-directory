package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GenerateDeviceCameraSnapshotRequest {
    public GenerateDeviceCameraSnapshotPathParams pathParams;
    public GenerateDeviceCameraSnapshotRequest withPathParams(GenerateDeviceCameraSnapshotPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public GenerateDeviceCameraSnapshotRequestBody request;
    public GenerateDeviceCameraSnapshotRequest withRequest(GenerateDeviceCameraSnapshotRequestBody request) {
        this.request = request;
        return this;
    }
}