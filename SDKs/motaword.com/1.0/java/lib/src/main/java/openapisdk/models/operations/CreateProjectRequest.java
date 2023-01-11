package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateProjectRequest {
    @SpeakeasyMetadata("request:mediaType=multipart/form-data")
    public CreateProjectRequestBody request;
    public CreateProjectRequest withRequest(CreateProjectRequestBody request) {
        this.request = request;
        return this;
    }
}