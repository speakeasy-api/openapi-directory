package openapisdk.models.operations;



public class FetchSafelistResponse {
    public String contentType;
    public FetchSafelistResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FetchSafelistResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.VerifyV2Safelist verifyV2Safelist;
    public FetchSafelistResponse withVerifyV2Safelist(openapisdk.models.shared.VerifyV2Safelist verifyV2Safelist) {
        this.verifyV2Safelist = verifyV2Safelist;
        return this;
    }
}