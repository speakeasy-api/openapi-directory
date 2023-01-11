package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateFieldTypeRequest {
    public String serverURL;
    public UpdateFieldTypeRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public UpdateFieldTypePathParams pathParams;
    public UpdateFieldTypeRequest withPathParams(UpdateFieldTypePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public UpdateFieldTypeUpdateFieldTypeRequest request;
    public UpdateFieldTypeRequest withRequest(UpdateFieldTypeUpdateFieldTypeRequest request) {
        this.request = request;
        return this;
    }
    public UpdateFieldTypeSecurity security;
    public UpdateFieldTypeRequest withSecurity(UpdateFieldTypeSecurity security) {
        this.security = security;
        return this;
    }
}