package openapisdk.models.operations;



public class PostSetupV1ResourcesRequest {
    public PostSetupV1ResourcesQueryParams queryParams;
    public PostSetupV1ResourcesRequest withQueryParams(PostSetupV1ResourcesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostSetupV1ResourcesRequests request;
    public PostSetupV1ResourcesRequest withRequest(PostSetupV1ResourcesRequests request) {
        this.request = request;
        return this;
    }
}