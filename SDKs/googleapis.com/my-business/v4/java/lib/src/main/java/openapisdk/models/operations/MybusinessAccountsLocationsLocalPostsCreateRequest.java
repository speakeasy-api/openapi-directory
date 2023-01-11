package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MybusinessAccountsLocationsLocalPostsCreateRequest {
    public MybusinessAccountsLocationsLocalPostsCreatePathParams pathParams;
    public MybusinessAccountsLocationsLocalPostsCreateRequest withPathParams(MybusinessAccountsLocationsLocalPostsCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public MybusinessAccountsLocationsLocalPostsCreateQueryParams queryParams;
    public MybusinessAccountsLocationsLocalPostsCreateRequest withQueryParams(MybusinessAccountsLocationsLocalPostsCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.LocalPost request;
    public MybusinessAccountsLocationsLocalPostsCreateRequest withRequest(openapisdk.models.shared.LocalPost request) {
        this.request = request;
        return this;
    }
}