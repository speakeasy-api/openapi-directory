package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MybusinessAccountsLocationsAdminsCreateRequest {
    public MybusinessAccountsLocationsAdminsCreatePathParams pathParams;
    public MybusinessAccountsLocationsAdminsCreateRequest withPathParams(MybusinessAccountsLocationsAdminsCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public MybusinessAccountsLocationsAdminsCreateQueryParams queryParams;
    public MybusinessAccountsLocationsAdminsCreateRequest withQueryParams(MybusinessAccountsLocationsAdminsCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Admin request;
    public MybusinessAccountsLocationsAdminsCreateRequest withRequest(openapisdk.models.shared.Admin request) {
        this.request = request;
        return this;
    }
}