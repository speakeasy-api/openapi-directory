package openapisdk.models.operations;



public class ListIpRecordResponse {
    public String contentType;
    public ListIpRecordResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public ListIpRecordListIpRecordResponse listIpRecordResponse;
    public ListIpRecordResponse withListIpRecordResponse(ListIpRecordListIpRecordResponse listIpRecordResponse) {
        this.listIpRecordResponse = listIpRecordResponse;
        return this;
    }
    public Long statusCode;
    public ListIpRecordResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}