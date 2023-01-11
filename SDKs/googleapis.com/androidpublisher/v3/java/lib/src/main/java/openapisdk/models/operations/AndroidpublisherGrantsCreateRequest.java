package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AndroidpublisherGrantsCreateRequest {
    public AndroidpublisherGrantsCreatePathParams pathParams;
    public AndroidpublisherGrantsCreateRequest withPathParams(AndroidpublisherGrantsCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public AndroidpublisherGrantsCreateQueryParams queryParams;
    public AndroidpublisherGrantsCreateRequest withQueryParams(AndroidpublisherGrantsCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Grant request;
    public AndroidpublisherGrantsCreateRequest withRequest(openapisdk.models.shared.Grant request) {
        this.request = request;
        return this;
    }
    public AndroidpublisherGrantsCreateSecurity security;
    public AndroidpublisherGrantsCreateRequest withSecurity(AndroidpublisherGrantsCreateSecurity security) {
        this.security = security;
        return this;
    }
}