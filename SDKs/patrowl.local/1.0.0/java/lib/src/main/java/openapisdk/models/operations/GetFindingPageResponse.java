package openapisdk.models.operations;



public class GetFindingPageResponse {
    public String contentType;
    public GetFindingPageResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Findings[] findings;
    public GetFindingPageResponse withFindings(openapisdk.models.shared.Findings[] findings) {
        this.findings = findings;
        return this;
    }
    public Long statusCode;
    public GetFindingPageResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}