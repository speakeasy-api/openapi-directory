package openapisdk.models.operations;



public class CloudsupportCasesPatchResponse {
    public openapisdk.models.shared.Case case_;
    public CloudsupportCasesPatchResponse withCase(openapisdk.models.shared.Case case_) {
        this.case_ = case_;
        return this;
    }
    public String contentType;
    public CloudsupportCasesPatchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CloudsupportCasesPatchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}