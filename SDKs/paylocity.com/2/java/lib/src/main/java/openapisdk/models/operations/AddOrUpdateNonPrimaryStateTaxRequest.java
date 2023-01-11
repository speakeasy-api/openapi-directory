package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AddOrUpdateNonPrimaryStateTaxRequest {
    public AddOrUpdateNonPrimaryStateTaxPathParams pathParams;
    public AddOrUpdateNonPrimaryStateTaxRequest withPathParams(AddOrUpdateNonPrimaryStateTaxPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.NonPrimaryStateTax request;
    public AddOrUpdateNonPrimaryStateTaxRequest withRequest(openapisdk.models.shared.NonPrimaryStateTax request) {
        this.request = request;
        return this;
    }
    public AddOrUpdateNonPrimaryStateTaxSecurity security;
    public AddOrUpdateNonPrimaryStateTaxRequest withSecurity(AddOrUpdateNonPrimaryStateTaxSecurity security) {
        this.security = security;
        return this;
    }
}