package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateGlossaryRequest {
    public CreateGlossaryPathParams pathParams;
    public CreateGlossaryRequest withPathParams(CreateGlossaryPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=multipart/form-data")
    public CreateGlossaryRequestBody request;
    public CreateGlossaryRequest withRequest(CreateGlossaryRequestBody request) {
        this.request = request;
        return this;
    }
}