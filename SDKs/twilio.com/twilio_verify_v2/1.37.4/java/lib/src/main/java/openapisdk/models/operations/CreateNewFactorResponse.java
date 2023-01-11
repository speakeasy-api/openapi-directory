package openapisdk.models.operations;



public class CreateNewFactorResponse {
    public String contentType;
    public CreateNewFactorResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CreateNewFactorResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.VerifyV2ServiceEntityNewFactor verifyV2ServiceEntityNewFactor;
    public CreateNewFactorResponse withVerifyV2ServiceEntityNewFactor(openapisdk.models.shared.VerifyV2ServiceEntityNewFactor verifyV2ServiceEntityNewFactor) {
        this.verifyV2ServiceEntityNewFactor = verifyV2ServiceEntityNewFactor;
        return this;
    }
}