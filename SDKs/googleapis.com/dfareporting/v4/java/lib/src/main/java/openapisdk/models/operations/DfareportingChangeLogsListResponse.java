package openapisdk.models.operations;



public class DfareportingChangeLogsListResponse {
    public openapisdk.models.shared.ChangeLogsListResponse changeLogsListResponse;
    public DfareportingChangeLogsListResponse withChangeLogsListResponse(openapisdk.models.shared.ChangeLogsListResponse changeLogsListResponse) {
        this.changeLogsListResponse = changeLogsListResponse;
        return this;
    }
    public String contentType;
    public DfareportingChangeLogsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DfareportingChangeLogsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}