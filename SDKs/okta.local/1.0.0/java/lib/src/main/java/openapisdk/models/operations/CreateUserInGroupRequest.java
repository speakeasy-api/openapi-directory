package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateUserInGroupRequest {
    public CreateUserInGroupQueryParams queryParams;
    public CreateUserInGroupRequest withQueryParams(CreateUserInGroupQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public CreateUserInGroupRequestBody request;
    public CreateUserInGroupRequest withRequest(CreateUserInGroupRequestBody request) {
        this.request = request;
        return this;
    }
}