package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateCustomerProfileRequest {
    public String serverURL;
    public UpdateCustomerProfileRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public UpdateCustomerProfilePathParams pathParams;
    public UpdateCustomerProfileRequest withPathParams(UpdateCustomerProfilePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public UpdateCustomerProfileUpdateCustomerProfileRequest request;
    public UpdateCustomerProfileRequest withRequest(UpdateCustomerProfileUpdateCustomerProfileRequest request) {
        this.request = request;
        return this;
    }
    public UpdateCustomerProfileSecurity security;
    public UpdateCustomerProfileRequest withSecurity(UpdateCustomerProfileSecurity security) {
        this.security = security;
        return this;
    }
}