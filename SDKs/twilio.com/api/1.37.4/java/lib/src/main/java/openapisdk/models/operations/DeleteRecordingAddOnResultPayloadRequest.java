package openapisdk.models.operations;



public class DeleteRecordingAddOnResultPayloadRequest {
    public String serverURL;
    public DeleteRecordingAddOnResultPayloadRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public DeleteRecordingAddOnResultPayloadPathParams pathParams;
    public DeleteRecordingAddOnResultPayloadRequest withPathParams(DeleteRecordingAddOnResultPayloadPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteRecordingAddOnResultPayloadSecurity security;
    public DeleteRecordingAddOnResultPayloadRequest withSecurity(DeleteRecordingAddOnResultPayloadSecurity security) {
        this.security = security;
        return this;
    }
}