package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PlaycustomappAccountsCustomAppsCreateRequest {
    public PlaycustomappAccountsCustomAppsCreatePathParams pathParams;
    public PlaycustomappAccountsCustomAppsCreateRequest withPathParams(PlaycustomappAccountsCustomAppsCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PlaycustomappAccountsCustomAppsCreateQueryParams queryParams;
    public PlaycustomappAccountsCustomAppsCreateRequest withQueryParams(PlaycustomappAccountsCustomAppsCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/octet-stream")
    public byte[] request;
    public PlaycustomappAccountsCustomAppsCreateRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
    public PlaycustomappAccountsCustomAppsCreateSecurity security;
    public PlaycustomappAccountsCustomAppsCreateRequest withSecurity(PlaycustomappAccountsCustomAppsCreateSecurity security) {
        this.security = security;
        return this;
    }
}