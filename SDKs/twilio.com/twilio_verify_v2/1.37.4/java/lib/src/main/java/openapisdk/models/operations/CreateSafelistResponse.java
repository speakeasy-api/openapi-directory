package openapisdk.models.operations;



public class CreateSafelistResponse {
    public String contentType;
    public CreateSafelistResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CreateSafelistResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.VerifyV2Safelist verifyV2Safelist;
    public CreateSafelistResponse withVerifyV2Safelist(openapisdk.models.shared.VerifyV2Safelist verifyV2Safelist) {
        this.verifyV2Safelist = verifyV2Safelist;
        return this;
    }
}