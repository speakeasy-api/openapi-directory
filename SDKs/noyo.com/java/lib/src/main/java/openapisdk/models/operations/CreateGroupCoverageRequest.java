package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateGroupCoverageRequest {
    public CreateGroupCoveragePathParams pathParams;
    public CreateGroupCoverageRequest withPathParams(CreateGroupCoveragePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GroupCoverageCreateRequest request;
    public CreateGroupCoverageRequest withRequest(openapisdk.models.shared.GroupCoverageCreateRequest request) {
        this.request = request;
        return this;
    }
}