package openapisdk.models.operations;



public class FetchRoomRequest {
    public String serverURL;
    public FetchRoomRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public FetchRoomPathParams pathParams;
    public FetchRoomRequest withPathParams(FetchRoomPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FetchRoomSecurity security;
    public FetchRoomRequest withSecurity(FetchRoomSecurity security) {
        this.security = security;
        return this;
    }
}