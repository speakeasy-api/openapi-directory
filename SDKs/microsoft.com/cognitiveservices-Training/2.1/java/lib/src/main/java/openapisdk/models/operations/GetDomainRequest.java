package openapisdk.models.operations;



public class GetDomainRequest {
    public GetDomainPathParams pathParams;
    public GetDomainRequest withPathParams(GetDomainPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetDomainHeaders headers;
    public GetDomainRequest withHeaders(GetDomainHeaders headers) {
        this.headers = headers;
        return this;
    }
}