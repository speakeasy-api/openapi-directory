package openapisdk.models.operations;



public class GetP45ReportOutputRequest {
    public GetP45ReportOutputQueryParams queryParams;
    public GetP45ReportOutputRequest withQueryParams(GetP45ReportOutputQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetP45ReportOutputHeaders headers;
    public GetP45ReportOutputRequest withHeaders(GetP45ReportOutputHeaders headers) {
        this.headers = headers;
        return this;
    }
}