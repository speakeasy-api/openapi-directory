package openapisdk.models.operations;



public class FetchFactorResponse {
    public String contentType;
    public FetchFactorResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FetchFactorResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.VerifyV2ServiceEntityFactor verifyV2ServiceEntityFactor;
    public FetchFactorResponse withVerifyV2ServiceEntityFactor(openapisdk.models.shared.VerifyV2ServiceEntityFactor verifyV2ServiceEntityFactor) {
        this.verifyV2ServiceEntityFactor = verifyV2ServiceEntityFactor;
        return this;
    }
}