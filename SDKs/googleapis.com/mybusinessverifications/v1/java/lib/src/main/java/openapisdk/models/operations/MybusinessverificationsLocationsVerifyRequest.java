package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MybusinessverificationsLocationsVerifyRequest {
    public MybusinessverificationsLocationsVerifyPathParams pathParams;
    public MybusinessverificationsLocationsVerifyRequest withPathParams(MybusinessverificationsLocationsVerifyPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public MybusinessverificationsLocationsVerifyQueryParams queryParams;
    public MybusinessverificationsLocationsVerifyRequest withQueryParams(MybusinessverificationsLocationsVerifyQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.VerifyLocationRequest request;
    public MybusinessverificationsLocationsVerifyRequest withRequest(openapisdk.models.shared.VerifyLocationRequest request) {
        this.request = request;
        return this;
    }
}