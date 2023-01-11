package openapisdk.models.operations;



public class AdsenseAccountsAdclientsAdunitsListResponse {
    public String contentType;
    public AdsenseAccountsAdclientsAdunitsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListAdUnitsResponse listAdUnitsResponse;
    public AdsenseAccountsAdclientsAdunitsListResponse withListAdUnitsResponse(openapisdk.models.shared.ListAdUnitsResponse listAdUnitsResponse) {
        this.listAdUnitsResponse = listAdUnitsResponse;
        return this;
    }
    public Long statusCode;
    public AdsenseAccountsAdclientsAdunitsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}