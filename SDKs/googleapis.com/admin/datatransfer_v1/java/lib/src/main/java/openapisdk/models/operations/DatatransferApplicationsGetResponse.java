package openapisdk.models.operations;



public class DatatransferApplicationsGetResponse {
    public openapisdk.models.shared.Application application;
    public DatatransferApplicationsGetResponse withApplication(openapisdk.models.shared.Application application) {
        this.application = application;
        return this;
    }
    public String contentType;
    public DatatransferApplicationsGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DatatransferApplicationsGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}