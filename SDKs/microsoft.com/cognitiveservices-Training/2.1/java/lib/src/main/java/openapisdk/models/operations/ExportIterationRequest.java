package openapisdk.models.operations;



public class ExportIterationRequest {
    public ExportIterationPathParams pathParams;
    public ExportIterationRequest withPathParams(ExportIterationPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ExportIterationQueryParams queryParams;
    public ExportIterationRequest withQueryParams(ExportIterationQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ExportIterationHeaders headers;
    public ExportIterationRequest withHeaders(ExportIterationHeaders headers) {
        this.headers = headers;
        return this;
    }
}