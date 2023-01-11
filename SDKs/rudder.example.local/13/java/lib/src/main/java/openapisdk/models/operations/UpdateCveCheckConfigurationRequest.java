package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateCveCheckConfigurationRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateCveCheckConfigurationRequestBody request;
    public UpdateCveCheckConfigurationRequest withRequest(UpdateCveCheckConfigurationRequestBody request) {
        this.request = request;
        return this;
    }
}