package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AuthVideoEditorRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.VideoEditorTokenRequest request;
    public AuthVideoEditorRequest withRequest(openapisdk.models.shared.VideoEditorTokenRequest request) {
        this.request = request;
        return this;
    }
    public AuthVideoEditorSecurity security;
    public AuthVideoEditorRequest withSecurity(AuthVideoEditorSecurity security) {
        this.security = security;
        return this;
    }
}