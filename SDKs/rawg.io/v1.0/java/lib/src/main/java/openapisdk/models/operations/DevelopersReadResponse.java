package openapisdk.models.operations;



public class DevelopersReadResponse {
    public String contentType;
    public DevelopersReadResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DeveloperSingle developerSingle;
    public DevelopersReadResponse withDeveloperSingle(openapisdk.models.shared.DeveloperSingle developerSingle) {
        this.developerSingle = developerSingle;
        return this;
    }
    public Long statusCode;
    public DevelopersReadResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}