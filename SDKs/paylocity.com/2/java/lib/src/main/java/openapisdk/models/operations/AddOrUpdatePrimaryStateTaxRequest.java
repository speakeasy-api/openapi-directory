package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AddOrUpdatePrimaryStateTaxRequest {
    public AddOrUpdatePrimaryStateTaxPathParams pathParams;
    public AddOrUpdatePrimaryStateTaxRequest withPathParams(AddOrUpdatePrimaryStateTaxPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.StateTax request;
    public AddOrUpdatePrimaryStateTaxRequest withRequest(openapisdk.models.shared.StateTax request) {
        this.request = request;
        return this;
    }
    public AddOrUpdatePrimaryStateTaxSecurity security;
    public AddOrUpdatePrimaryStateTaxRequest withSecurity(AddOrUpdatePrimaryStateTaxSecurity security) {
        this.security = security;
        return this;
    }
}