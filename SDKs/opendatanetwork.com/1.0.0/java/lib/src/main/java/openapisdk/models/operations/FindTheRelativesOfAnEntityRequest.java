package openapisdk.models.operations;



public class FindTheRelativesOfAnEntityRequest {
    public FindTheRelativesOfAnEntityPathParams pathParams;
    public FindTheRelativesOfAnEntityRequest withPathParams(FindTheRelativesOfAnEntityPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FindTheRelativesOfAnEntityQueryParams queryParams;
    public FindTheRelativesOfAnEntityRequest withQueryParams(FindTheRelativesOfAnEntityQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public FindTheRelativesOfAnEntityHeaders headers;
    public FindTheRelativesOfAnEntityRequest withHeaders(FindTheRelativesOfAnEntityHeaders headers) {
        this.headers = headers;
        return this;
    }
}