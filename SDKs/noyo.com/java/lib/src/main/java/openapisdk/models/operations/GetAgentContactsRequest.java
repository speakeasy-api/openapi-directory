package openapisdk.models.operations;



public class GetAgentContactsRequest {
    public GetAgentContactsPathParams pathParams;
    public GetAgentContactsRequest withPathParams(GetAgentContactsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetAgentContactsQueryParams queryParams;
    public GetAgentContactsRequest withQueryParams(GetAgentContactsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
}