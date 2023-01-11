package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ReposUpdateReleaseRequest {
    public ReposUpdateReleasePathParams pathParams;
    public ReposUpdateReleaseRequest withPathParams(ReposUpdateReleasePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public ReposUpdateReleaseRequestBody request;
    public ReposUpdateReleaseRequest withRequest(ReposUpdateReleaseRequestBody request) {
        this.request = request;
        return this;
    }
}