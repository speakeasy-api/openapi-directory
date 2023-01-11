package openapisdk.models.operations;



public class PutSetupV1ResourcesBulkRequest {
    public PutSetupV1ResourcesBulkQueryParams queryParams;
    public PutSetupV1ResourcesBulkRequest withQueryParams(PutSetupV1ResourcesBulkQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PutSetupV1ResourcesBulkRequests request;
    public PutSetupV1ResourcesBulkRequest withRequest(PutSetupV1ResourcesBulkRequests request) {
        this.request = request;
        return this;
    }
}