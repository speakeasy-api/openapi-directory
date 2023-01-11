package openapisdk.models.operations;



public class DisplayvideoAdvertisersListResponse {
    public String contentType;
    public DisplayvideoAdvertisersListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListAdvertisersResponse listAdvertisersResponse;
    public DisplayvideoAdvertisersListResponse withListAdvertisersResponse(openapisdk.models.shared.ListAdvertisersResponse listAdvertisersResponse) {
        this.listAdvertisersResponse = listAdvertisersResponse;
        return this;
    }
    public Long statusCode;
    public DisplayvideoAdvertisersListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}