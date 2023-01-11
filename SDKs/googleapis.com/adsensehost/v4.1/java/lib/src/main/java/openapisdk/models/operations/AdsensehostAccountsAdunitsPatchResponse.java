package openapisdk.models.operations;



public class AdsensehostAccountsAdunitsPatchResponse {
    public openapisdk.models.shared.AdUnit adUnit;
    public AdsensehostAccountsAdunitsPatchResponse withAdUnit(openapisdk.models.shared.AdUnit adUnit) {
        this.adUnit = adUnit;
        return this;
    }
    public String contentType;
    public AdsensehostAccountsAdunitsPatchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public AdsensehostAccountsAdunitsPatchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}