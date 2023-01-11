package openapisdk.models.operations;



public class CloudsupportCasesCloseResponse {
    public openapisdk.models.shared.Case case_;
    public CloudsupportCasesCloseResponse withCase(openapisdk.models.shared.Case case_) {
        this.case_ = case_;
        return this;
    }
    public String contentType;
    public CloudsupportCasesCloseResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CloudsupportCasesCloseResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}