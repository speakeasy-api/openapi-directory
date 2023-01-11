package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateDeviceCameraQualityAndRetentionRequest {
    public UpdateDeviceCameraQualityAndRetentionPathParams pathParams;
    public UpdateDeviceCameraQualityAndRetentionRequest withPathParams(UpdateDeviceCameraQualityAndRetentionPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateDeviceCameraQualityAndRetentionRequestBody request;
    public UpdateDeviceCameraQualityAndRetentionRequest withRequest(UpdateDeviceCameraQualityAndRetentionRequestBody request) {
        this.request = request;
        return this;
    }
}