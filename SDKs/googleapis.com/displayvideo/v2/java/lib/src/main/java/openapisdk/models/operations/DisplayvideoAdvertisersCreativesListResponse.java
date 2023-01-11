package openapisdk.models.operations;



public class DisplayvideoAdvertisersCreativesListResponse {
    public String contentType;
    public DisplayvideoAdvertisersCreativesListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListCreativesResponse listCreativesResponse;
    public DisplayvideoAdvertisersCreativesListResponse withListCreativesResponse(openapisdk.models.shared.ListCreativesResponse listCreativesResponse) {
        this.listCreativesResponse = listCreativesResponse;
        return this;
    }
    public Long statusCode;
    public DisplayvideoAdvertisersCreativesListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}