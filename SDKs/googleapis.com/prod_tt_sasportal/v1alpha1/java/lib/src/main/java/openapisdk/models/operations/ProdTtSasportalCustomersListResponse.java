package openapisdk.models.operations;



public class ProdTtSasportalCustomersListResponse {
    public String contentType;
    public ProdTtSasportalCustomersListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.SasPortalListCustomersResponse sasPortalListCustomersResponse;
    public ProdTtSasportalCustomersListResponse withSasPortalListCustomersResponse(openapisdk.models.shared.SasPortalListCustomersResponse sasPortalListCustomersResponse) {
        this.sasPortalListCustomersResponse = sasPortalListCustomersResponse;
        return this;
    }
    public Long statusCode;
    public ProdTtSasportalCustomersListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}