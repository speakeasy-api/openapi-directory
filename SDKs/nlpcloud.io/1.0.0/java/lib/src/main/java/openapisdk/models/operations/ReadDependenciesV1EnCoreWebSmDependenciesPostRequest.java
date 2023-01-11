package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ReadDependenciesV1EnCoreWebSmDependenciesPostRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UserRequestIn request;
    public ReadDependenciesV1EnCoreWebSmDependenciesPostRequest withRequest(openapisdk.models.shared.UserRequestIn request) {
        this.request = request;
        return this;
    }
}