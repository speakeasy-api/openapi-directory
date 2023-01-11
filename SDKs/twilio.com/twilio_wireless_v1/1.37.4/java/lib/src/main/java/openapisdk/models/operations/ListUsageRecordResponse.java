package openapisdk.models.operations;



public class ListUsageRecordResponse {
    public String contentType;
    public ListUsageRecordResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public ListUsageRecordListUsageRecordResponse listUsageRecordResponse;
    public ListUsageRecordResponse withListUsageRecordResponse(ListUsageRecordListUsageRecordResponse listUsageRecordResponse) {
        this.listUsageRecordResponse = listUsageRecordResponse;
        return this;
    }
    public Long statusCode;
    public ListUsageRecordResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}