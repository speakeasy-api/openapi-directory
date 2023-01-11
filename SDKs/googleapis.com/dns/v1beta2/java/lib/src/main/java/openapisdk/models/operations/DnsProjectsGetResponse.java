package openapisdk.models.operations;



public class DnsProjectsGetResponse {
    public String contentType;
    public DnsProjectsGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Project project;
    public DnsProjectsGetResponse withProject(openapisdk.models.shared.Project project) {
        this.project = project;
        return this;
    }
    public Long statusCode;
    public DnsProjectsGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}