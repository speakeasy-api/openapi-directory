package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ReadEntitiesV1EnCoreWebSmEntitiesPostRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UserRequestIn request;
    public ReadEntitiesV1EnCoreWebSmEntitiesPostRequest withRequest(openapisdk.models.shared.UserRequestIn request) {
        this.request = request;
        return this;
    }
}