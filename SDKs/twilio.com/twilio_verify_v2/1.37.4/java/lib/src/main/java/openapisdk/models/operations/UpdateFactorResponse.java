package openapisdk.models.operations;



public class UpdateFactorResponse {
    public String contentType;
    public UpdateFactorResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UpdateFactorResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.VerifyV2ServiceEntityFactor verifyV2ServiceEntityFactor;
    public UpdateFactorResponse withVerifyV2ServiceEntityFactor(openapisdk.models.shared.VerifyV2ServiceEntityFactor verifyV2ServiceEntityFactor) {
        this.verifyV2ServiceEntityFactor = verifyV2ServiceEntityFactor;
        return this;
    }
}