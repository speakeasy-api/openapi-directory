package openapisdk.models.operations;



public class DisplayvideoPartnersListResponse {
    public String contentType;
    public DisplayvideoPartnersListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListPartnersResponse listPartnersResponse;
    public DisplayvideoPartnersListResponse withListPartnersResponse(openapisdk.models.shared.ListPartnersResponse listPartnersResponse) {
        this.listPartnersResponse = listPartnersResponse;
        return this;
    }
    public Long statusCode;
    public DisplayvideoPartnersListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}