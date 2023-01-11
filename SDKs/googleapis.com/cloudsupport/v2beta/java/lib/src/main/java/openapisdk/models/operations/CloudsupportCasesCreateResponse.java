package openapisdk.models.operations;



public class CloudsupportCasesCreateResponse {
    public openapisdk.models.shared.Case case_;
    public CloudsupportCasesCreateResponse withCase(openapisdk.models.shared.Case case_) {
        this.case_ = case_;
        return this;
    }
    public String contentType;
    public CloudsupportCasesCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CloudsupportCasesCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}