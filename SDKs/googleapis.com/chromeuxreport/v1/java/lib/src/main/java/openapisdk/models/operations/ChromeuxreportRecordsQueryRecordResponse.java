package openapisdk.models.operations;



public class ChromeuxreportRecordsQueryRecordResponse {
    public String contentType;
    public ChromeuxreportRecordsQueryRecordResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.QueryResponse queryResponse;
    public ChromeuxreportRecordsQueryRecordResponse withQueryResponse(openapisdk.models.shared.QueryResponse queryResponse) {
        this.queryResponse = queryResponse;
        return this;
    }
    public Long statusCode;
    public ChromeuxreportRecordsQueryRecordResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}