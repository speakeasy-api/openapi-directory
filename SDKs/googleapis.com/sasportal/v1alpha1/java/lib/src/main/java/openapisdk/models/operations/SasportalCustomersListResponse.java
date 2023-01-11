package openapisdk.models.operations;



public class SasportalCustomersListResponse {
    public String contentType;
    public SasportalCustomersListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.SasPortalListCustomersResponse sasPortalListCustomersResponse;
    public SasportalCustomersListResponse withSasPortalListCustomersResponse(openapisdk.models.shared.SasPortalListCustomersResponse sasPortalListCustomersResponse) {
        this.sasPortalListCustomersResponse = sasPortalListCustomersResponse;
        return this;
    }
    public Long statusCode;
    public SasportalCustomersListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}