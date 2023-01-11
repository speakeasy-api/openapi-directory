package openapisdk.models.operations;



public class AdsensehostAccountsAdunitsListResponse {
    public openapisdk.models.shared.AdUnits adUnits;
    public AdsensehostAccountsAdunitsListResponse withAdUnits(openapisdk.models.shared.AdUnits adUnits) {
        this.adUnits = adUnits;
        return this;
    }
    public String contentType;
    public AdsensehostAccountsAdunitsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public AdsensehostAccountsAdunitsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}