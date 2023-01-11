package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MybusinessAccountsLocationsFindMatchesRequest {
    public MybusinessAccountsLocationsFindMatchesPathParams pathParams;
    public MybusinessAccountsLocationsFindMatchesRequest withPathParams(MybusinessAccountsLocationsFindMatchesPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public MybusinessAccountsLocationsFindMatchesQueryParams queryParams;
    public MybusinessAccountsLocationsFindMatchesRequest withQueryParams(MybusinessAccountsLocationsFindMatchesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.FindMatchingLocationsRequest request;
    public MybusinessAccountsLocationsFindMatchesRequest withRequest(openapisdk.models.shared.FindMatchingLocationsRequest request) {
        this.request = request;
        return this;
    }
}