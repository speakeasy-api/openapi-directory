package openapisdk.models.operations;



public class MonitoringProjectsSnoozesListResponse {
    public String contentType;
    public MonitoringProjectsSnoozesListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListSnoozesResponse listSnoozesResponse;
    public MonitoringProjectsSnoozesListResponse withListSnoozesResponse(openapisdk.models.shared.ListSnoozesResponse listSnoozesResponse) {
        this.listSnoozesResponse = listSnoozesResponse;
        return this;
    }
    public Long statusCode;
    public MonitoringProjectsSnoozesListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}