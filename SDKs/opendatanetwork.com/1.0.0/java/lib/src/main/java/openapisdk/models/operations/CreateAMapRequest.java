package openapisdk.models.operations;



public class CreateAMapRequest {
    public CreateAMapQueryParams queryParams;
    public CreateAMapRequest withQueryParams(CreateAMapQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public CreateAMapHeaders headers;
    public CreateAMapRequest withHeaders(CreateAMapHeaders headers) {
        this.headers = headers;
        return this;
    }
}