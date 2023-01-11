package openapisdk.models.operations;



public class ContentDatafeedstatusesListResponse {
    public String contentType;
    public ContentDatafeedstatusesListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DatafeedstatusesListResponse datafeedstatusesListResponse;
    public ContentDatafeedstatusesListResponse withDatafeedstatusesListResponse(openapisdk.models.shared.DatafeedstatusesListResponse datafeedstatusesListResponse) {
        this.datafeedstatusesListResponse = datafeedstatusesListResponse;
        return this;
    }
    public Long statusCode;
    public ContentDatafeedstatusesListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}