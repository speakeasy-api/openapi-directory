package openapisdk.models.operations;



public class CloudtraceProjectsTracesListResponse {
    public String contentType;
    public CloudtraceProjectsTracesListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListTracesResponse listTracesResponse;
    public CloudtraceProjectsTracesListResponse withListTracesResponse(openapisdk.models.shared.ListTracesResponse listTracesResponse) {
        this.listTracesResponse = listTracesResponse;
        return this;
    }
    public Long statusCode;
    public CloudtraceProjectsTracesListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}