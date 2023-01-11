package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MybusinessAccountsLocationsVerificationsCompleteRequest {
    public MybusinessAccountsLocationsVerificationsCompletePathParams pathParams;
    public MybusinessAccountsLocationsVerificationsCompleteRequest withPathParams(MybusinessAccountsLocationsVerificationsCompletePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public MybusinessAccountsLocationsVerificationsCompleteQueryParams queryParams;
    public MybusinessAccountsLocationsVerificationsCompleteRequest withQueryParams(MybusinessAccountsLocationsVerificationsCompleteQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CompleteVerificationRequest request;
    public MybusinessAccountsLocationsVerificationsCompleteRequest withRequest(openapisdk.models.shared.CompleteVerificationRequest request) {
        this.request = request;
        return this;
    }
}