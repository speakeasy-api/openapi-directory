package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateGlossaryRequest {
    public UpdateGlossaryPathParams pathParams;
    public UpdateGlossaryRequest withPathParams(UpdateGlossaryPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=multipart/form-data")
    public UpdateGlossaryRequestBody request;
    public UpdateGlossaryRequest withRequest(UpdateGlossaryRequestBody request) {
        this.request = request;
        return this;
    }
}