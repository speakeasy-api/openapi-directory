package openapisdk.models.operations;



public class FindRequest {
    public FindQueryParams queryParams;
    public FindRequest withQueryParams(FindQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
}