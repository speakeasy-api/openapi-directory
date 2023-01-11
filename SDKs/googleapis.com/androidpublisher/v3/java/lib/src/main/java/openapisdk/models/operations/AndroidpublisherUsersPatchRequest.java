package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AndroidpublisherUsersPatchRequest {
    public AndroidpublisherUsersPatchPathParams pathParams;
    public AndroidpublisherUsersPatchRequest withPathParams(AndroidpublisherUsersPatchPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public AndroidpublisherUsersPatchQueryParams queryParams;
    public AndroidpublisherUsersPatchRequest withQueryParams(AndroidpublisherUsersPatchQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UserInput request;
    public AndroidpublisherUsersPatchRequest withRequest(openapisdk.models.shared.UserInput request) {
        this.request = request;
        return this;
    }
    public AndroidpublisherUsersPatchSecurity security;
    public AndroidpublisherUsersPatchRequest withSecurity(AndroidpublisherUsersPatchSecurity security) {
        this.security = security;
        return this;
    }
}