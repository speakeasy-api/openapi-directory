package openapisdk.models.operations;



public class FetchPlayerStreamerPlaybackGrantRequest {
    public String serverURL;
    public FetchPlayerStreamerPlaybackGrantRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public FetchPlayerStreamerPlaybackGrantPathParams pathParams;
    public FetchPlayerStreamerPlaybackGrantRequest withPathParams(FetchPlayerStreamerPlaybackGrantPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FetchPlayerStreamerPlaybackGrantSecurity security;
    public FetchPlayerStreamerPlaybackGrantRequest withSecurity(FetchPlayerStreamerPlaybackGrantSecurity security) {
        this.security = security;
        return this;
    }
}