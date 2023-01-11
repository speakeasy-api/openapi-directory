package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AddNewEmployeeToWebLinkRequest {
    public AddNewEmployeeToWebLinkPathParams pathParams;
    public AddNewEmployeeToWebLinkRequest withPathParams(AddNewEmployeeToWebLinkPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.StagedEmployee request;
    public AddNewEmployeeToWebLinkRequest withRequest(openapisdk.models.shared.StagedEmployee request) {
        this.request = request;
        return this;
    }
    public AddNewEmployeeToWebLinkSecurity security;
    public AddNewEmployeeToWebLinkRequest withSecurity(AddNewEmployeeToWebLinkSecurity security) {
        this.security = security;
        return this;
    }
}