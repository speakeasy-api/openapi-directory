package openapisdk.models.operations;



public class DfareportingChangeLogsGetResponse {
    public openapisdk.models.shared.ChangeLog changeLog;
    public DfareportingChangeLogsGetResponse withChangeLog(openapisdk.models.shared.ChangeLog changeLog) {
        this.changeLog = changeLog;
        return this;
    }
    public String contentType;
    public DfareportingChangeLogsGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DfareportingChangeLogsGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}