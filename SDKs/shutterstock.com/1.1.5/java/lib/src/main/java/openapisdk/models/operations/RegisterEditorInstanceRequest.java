package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RegisterEditorInstanceRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.RegisterVideoEditorRequest request;
    public RegisterEditorInstanceRequest withRequest(openapisdk.models.shared.RegisterVideoEditorRequest request) {
        this.request = request;
        return this;
    }
    public RegisterEditorInstanceSecurity security;
    public RegisterEditorInstanceRequest withSecurity(RegisterEditorInstanceSecurity security) {
        this.security = security;
        return this;
    }
}