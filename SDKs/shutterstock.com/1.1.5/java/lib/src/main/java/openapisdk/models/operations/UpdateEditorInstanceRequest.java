package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateEditorInstanceRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UpdateVideoEditorRequest request;
    public UpdateEditorInstanceRequest withRequest(openapisdk.models.shared.UpdateVideoEditorRequest request) {
        this.request = request;
        return this;
    }
    public UpdateEditorInstanceSecurity security;
    public UpdateEditorInstanceRequest withSecurity(UpdateEditorInstanceSecurity security) {
        this.security = security;
        return this;
    }
}