package openapisdk.models.operations;



public class PostSetupV1ResourcesBulkRequest {
    public PostSetupV1ResourcesBulkQueryParams queryParams;
    public PostSetupV1ResourcesBulkRequest withQueryParams(PostSetupV1ResourcesBulkQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostSetupV1ResourcesBulkRequests request;
    public PostSetupV1ResourcesBulkRequest withRequest(PostSetupV1ResourcesBulkRequests request) {
        this.request = request;
        return this;
    }
}