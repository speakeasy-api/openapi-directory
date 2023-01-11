package openapisdk.models.operations;



public class GetReportOutputRequest {
    public GetReportOutputPathParams pathParams;
    public GetReportOutputRequest withPathParams(GetReportOutputPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetReportOutputHeaders headers;
    public GetReportOutputRequest withHeaders(GetReportOutputHeaders headers) {
        this.headers = headers;
        return this;
    }
}