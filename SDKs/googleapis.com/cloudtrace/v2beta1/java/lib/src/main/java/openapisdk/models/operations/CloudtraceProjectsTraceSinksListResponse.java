package openapisdk.models.operations;



public class CloudtraceProjectsTraceSinksListResponse {
    public String contentType;
    public CloudtraceProjectsTraceSinksListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListTraceSinksResponse listTraceSinksResponse;
    public CloudtraceProjectsTraceSinksListResponse withListTraceSinksResponse(openapisdk.models.shared.ListTraceSinksResponse listTraceSinksResponse) {
        this.listTraceSinksResponse = listTraceSinksResponse;
        return this;
    }
    public Long statusCode;
    public CloudtraceProjectsTraceSinksListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}