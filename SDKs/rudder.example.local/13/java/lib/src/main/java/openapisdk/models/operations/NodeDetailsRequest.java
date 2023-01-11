package openapisdk.models.operations;



public class NodeDetailsRequest {
    public NodeDetailsPathParams pathParams;
    public NodeDetailsRequest withPathParams(NodeDetailsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public NodeDetailsQueryParams queryParams;
    public NodeDetailsRequest withQueryParams(NodeDetailsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
}