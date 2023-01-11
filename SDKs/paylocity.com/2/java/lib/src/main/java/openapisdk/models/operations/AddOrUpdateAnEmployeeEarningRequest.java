package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AddOrUpdateAnEmployeeEarningRequest {
    public AddOrUpdateAnEmployeeEarningPathParams pathParams;
    public AddOrUpdateAnEmployeeEarningRequest withPathParams(AddOrUpdateAnEmployeeEarningPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Earning request;
    public AddOrUpdateAnEmployeeEarningRequest withRequest(openapisdk.models.shared.Earning request) {
        this.request = request;
        return this;
    }
    public AddOrUpdateAnEmployeeEarningSecurity security;
    public AddOrUpdateAnEmployeeEarningRequest withSecurity(AddOrUpdateAnEmployeeEarningSecurity security) {
        this.security = security;
        return this;
    }
}