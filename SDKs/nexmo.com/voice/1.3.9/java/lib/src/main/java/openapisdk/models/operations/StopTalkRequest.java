package openapisdk.models.operations;



public class StopTalkRequest {
    public StopTalkPathParams pathParams;
    public StopTalkRequest withPathParams(StopTalkPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public StopTalkSecurity security;
    public StopTalkRequest withSecurity(StopTalkSecurity security) {
        this.security = security;
        return this;
    }
}