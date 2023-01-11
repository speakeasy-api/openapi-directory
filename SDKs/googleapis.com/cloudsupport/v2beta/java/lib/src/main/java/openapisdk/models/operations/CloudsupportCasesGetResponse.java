package openapisdk.models.operations;



public class CloudsupportCasesGetResponse {
    public openapisdk.models.shared.Case case_;
    public CloudsupportCasesGetResponse withCase(openapisdk.models.shared.Case case_) {
        this.case_ = case_;
        return this;
    }
    public String contentType;
    public CloudsupportCasesGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CloudsupportCasesGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}