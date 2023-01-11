package openapisdk.models.operations;



public class DeleteRecordingAddOnResultRequest {
    public String serverURL;
    public DeleteRecordingAddOnResultRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public DeleteRecordingAddOnResultPathParams pathParams;
    public DeleteRecordingAddOnResultRequest withPathParams(DeleteRecordingAddOnResultPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteRecordingAddOnResultSecurity security;
    public DeleteRecordingAddOnResultRequest withSecurity(DeleteRecordingAddOnResultSecurity security) {
        this.security = security;
        return this;
    }
}