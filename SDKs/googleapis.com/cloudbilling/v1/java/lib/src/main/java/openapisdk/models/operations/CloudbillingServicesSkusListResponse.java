package openapisdk.models.operations;



public class CloudbillingServicesSkusListResponse {
    public String contentType;
    public CloudbillingServicesSkusListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListSkusResponse listSkusResponse;
    public CloudbillingServicesSkusListResponse withListSkusResponse(openapisdk.models.shared.ListSkusResponse listSkusResponse) {
        this.listSkusResponse = listSkusResponse;
        return this;
    }
    public Long statusCode;
    public CloudbillingServicesSkusListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}