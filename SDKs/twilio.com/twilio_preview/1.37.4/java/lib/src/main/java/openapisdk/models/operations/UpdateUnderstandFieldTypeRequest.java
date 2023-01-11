package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateUnderstandFieldTypeRequest {
    public String serverURL;
    public UpdateUnderstandFieldTypeRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public UpdateUnderstandFieldTypePathParams pathParams;
    public UpdateUnderstandFieldTypeRequest withPathParams(UpdateUnderstandFieldTypePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public UpdateUnderstandFieldTypeUpdateUnderstandFieldTypeRequest request;
    public UpdateUnderstandFieldTypeRequest withRequest(UpdateUnderstandFieldTypeUpdateUnderstandFieldTypeRequest request) {
        this.request = request;
        return this;
    }
    public UpdateUnderstandFieldTypeSecurity security;
    public UpdateUnderstandFieldTypeRequest withSecurity(UpdateUnderstandFieldTypeSecurity security) {
        this.security = security;
        return this;
    }
}