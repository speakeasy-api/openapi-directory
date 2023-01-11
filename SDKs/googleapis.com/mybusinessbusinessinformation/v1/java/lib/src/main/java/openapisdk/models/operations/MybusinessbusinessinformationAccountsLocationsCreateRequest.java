package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MybusinessbusinessinformationAccountsLocationsCreateRequest {
    public MybusinessbusinessinformationAccountsLocationsCreatePathParams pathParams;
    public MybusinessbusinessinformationAccountsLocationsCreateRequest withPathParams(MybusinessbusinessinformationAccountsLocationsCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public MybusinessbusinessinformationAccountsLocationsCreateQueryParams queryParams;
    public MybusinessbusinessinformationAccountsLocationsCreateRequest withQueryParams(MybusinessbusinessinformationAccountsLocationsCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.LocationInput request;
    public MybusinessbusinessinformationAccountsLocationsCreateRequest withRequest(openapisdk.models.shared.LocationInput request) {
        this.request = request;
        return this;
    }
}