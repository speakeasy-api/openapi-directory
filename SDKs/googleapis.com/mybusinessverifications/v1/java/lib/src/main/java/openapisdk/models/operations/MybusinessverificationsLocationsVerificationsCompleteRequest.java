package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MybusinessverificationsLocationsVerificationsCompleteRequest {
    public MybusinessverificationsLocationsVerificationsCompletePathParams pathParams;
    public MybusinessverificationsLocationsVerificationsCompleteRequest withPathParams(MybusinessverificationsLocationsVerificationsCompletePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public MybusinessverificationsLocationsVerificationsCompleteQueryParams queryParams;
    public MybusinessverificationsLocationsVerificationsCompleteRequest withQueryParams(MybusinessverificationsLocationsVerificationsCompleteQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CompleteVerificationRequest request;
    public MybusinessverificationsLocationsVerificationsCompleteRequest withRequest(openapisdk.models.shared.CompleteVerificationRequest request) {
        this.request = request;
        return this;
    }
}