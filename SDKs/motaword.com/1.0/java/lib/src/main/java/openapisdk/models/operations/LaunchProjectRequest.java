package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class LaunchProjectRequest {
    public LaunchProjectPathParams pathParams;
    public LaunchProjectRequest withPathParams(LaunchProjectPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=multipart/form-data")
    public LaunchProjectRequestBody request;
    public LaunchProjectRequest withRequest(LaunchProjectRequestBody request) {
        this.request = request;
        return this;
    }
}