package openapisdk.models.operations;



public class CloudsupportCasesEscalateResponse {
    public openapisdk.models.shared.Case case_;
    public CloudsupportCasesEscalateResponse withCase(openapisdk.models.shared.Case case_) {
        this.case_ = case_;
        return this;
    }
    public String contentType;
    public CloudsupportCasesEscalateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CloudsupportCasesEscalateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}