package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateOrganizationActionBatchRequest {
    public CreateOrganizationActionBatchPathParams pathParams;
    public CreateOrganizationActionBatchRequest withPathParams(CreateOrganizationActionBatchPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public CreateOrganizationActionBatchRequestBody request;
    public CreateOrganizationActionBatchRequest withRequest(CreateOrganizationActionBatchRequestBody request) {
        this.request = request;
        return this;
    }
}