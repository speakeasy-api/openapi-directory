package openapisdk.models.operations;



public class FetchDialogueRequest {
    public String serverURL;
    public FetchDialogueRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public FetchDialoguePathParams pathParams;
    public FetchDialogueRequest withPathParams(FetchDialoguePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FetchDialogueSecurity security;
    public FetchDialogueRequest withSecurity(FetchDialogueSecurity security) {
        this.security = security;
        return this;
    }
}