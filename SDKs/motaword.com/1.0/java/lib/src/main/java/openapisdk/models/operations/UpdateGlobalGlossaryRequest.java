package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateGlobalGlossaryRequest {
    @SpeakeasyMetadata("request:mediaType=multipart/form-data")
    public UpdateGlobalGlossaryRequestBody request;
    public UpdateGlobalGlossaryRequest withRequest(UpdateGlobalGlossaryRequestBody request) {
        this.request = request;
        return this;
    }
}