package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ReadSentenceDependenciesV1EnCoreWebSmSentenceDependenciesPostRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UserRequestIn request;
    public ReadSentenceDependenciesV1EnCoreWebSmSentenceDependenciesPostRequest withRequest(openapisdk.models.shared.UserRequestIn request) {
        this.request = request;
        return this;
    }
}