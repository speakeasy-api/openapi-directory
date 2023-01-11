package openapisdk.models.operations;



public class YoutubereportingReportTypesListResponse {
    public String contentType;
    public YoutubereportingReportTypesListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListReportTypesResponse listReportTypesResponse;
    public YoutubereportingReportTypesListResponse withListReportTypesResponse(openapisdk.models.shared.ListReportTypesResponse listReportTypesResponse) {
        this.listReportTypesResponse = listReportTypesResponse;
        return this;
    }
    public Long statusCode;
    public YoutubereportingReportTypesListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}