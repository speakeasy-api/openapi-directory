package openapisdk.models.operations;



public class FetchVoiceNumberRequest {
    public String serverURL;
    public FetchVoiceNumberRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public FetchVoiceNumberPathParams pathParams;
    public FetchVoiceNumberRequest withPathParams(FetchVoiceNumberPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FetchVoiceNumberSecurity security;
    public FetchVoiceNumberRequest withSecurity(FetchVoiceNumberSecurity security) {
        this.security = security;
        return this;
    }
}