package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateNetworkCameraQualityRetentionProfileRequest {
    public UpdateNetworkCameraQualityRetentionProfilePathParams pathParams;
    public UpdateNetworkCameraQualityRetentionProfileRequest withPathParams(UpdateNetworkCameraQualityRetentionProfilePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateNetworkCameraQualityRetentionProfileRequestBody request;
    public UpdateNetworkCameraQualityRetentionProfileRequest withRequest(UpdateNetworkCameraQualityRetentionProfileRequestBody request) {
        this.request = request;
        return this;
    }
}