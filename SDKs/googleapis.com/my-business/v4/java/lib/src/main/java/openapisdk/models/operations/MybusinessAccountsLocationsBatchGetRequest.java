package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MybusinessAccountsLocationsBatchGetRequest {
    public MybusinessAccountsLocationsBatchGetPathParams pathParams;
    public MybusinessAccountsLocationsBatchGetRequest withPathParams(MybusinessAccountsLocationsBatchGetPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public MybusinessAccountsLocationsBatchGetQueryParams queryParams;
    public MybusinessAccountsLocationsBatchGetRequest withQueryParams(MybusinessAccountsLocationsBatchGetQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.BatchGetLocationsRequest request;
    public MybusinessAccountsLocationsBatchGetRequest withRequest(openapisdk.models.shared.BatchGetLocationsRequest request) {
        this.request = request;
        return this;
    }
}