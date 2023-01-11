package openapisdk.models.operations;



public class FetchUnderstandDialogueRequest {
    public String serverURL;
    public FetchUnderstandDialogueRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public FetchUnderstandDialoguePathParams pathParams;
    public FetchUnderstandDialogueRequest withPathParams(FetchUnderstandDialoguePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FetchUnderstandDialogueSecurity security;
    public FetchUnderstandDialogueRequest withSecurity(FetchUnderstandDialogueSecurity security) {
        this.security = security;
        return this;
    }
}