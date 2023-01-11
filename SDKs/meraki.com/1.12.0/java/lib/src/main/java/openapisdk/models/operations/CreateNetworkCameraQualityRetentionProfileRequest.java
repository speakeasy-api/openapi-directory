package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateNetworkCameraQualityRetentionProfileRequest {
    public CreateNetworkCameraQualityRetentionProfilePathParams pathParams;
    public CreateNetworkCameraQualityRetentionProfileRequest withPathParams(CreateNetworkCameraQualityRetentionProfilePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public CreateNetworkCameraQualityRetentionProfileRequestBody request;
    public CreateNetworkCameraQualityRetentionProfileRequest withRequest(CreateNetworkCameraQualityRetentionProfileRequestBody request) {
        this.request = request;
        return this;
    }
}