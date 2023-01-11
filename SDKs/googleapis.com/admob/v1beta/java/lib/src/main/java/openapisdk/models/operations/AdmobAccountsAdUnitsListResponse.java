package openapisdk.models.operations;



public class AdmobAccountsAdUnitsListResponse {
    public String contentType;
    public AdmobAccountsAdUnitsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListAdUnitsResponse listAdUnitsResponse;
    public AdmobAccountsAdUnitsListResponse withListAdUnitsResponse(openapisdk.models.shared.ListAdUnitsResponse listAdUnitsResponse) {
        this.listAdUnitsResponse = listAdUnitsResponse;
        return this;
    }
    public Long statusCode;
    public AdmobAccountsAdUnitsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}