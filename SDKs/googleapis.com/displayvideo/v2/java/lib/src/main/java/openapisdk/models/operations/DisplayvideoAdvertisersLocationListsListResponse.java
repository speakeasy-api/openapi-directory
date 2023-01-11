package openapisdk.models.operations;



public class DisplayvideoAdvertisersLocationListsListResponse {
    public String contentType;
    public DisplayvideoAdvertisersLocationListsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListLocationListsResponse listLocationListsResponse;
    public DisplayvideoAdvertisersLocationListsListResponse withListLocationListsResponse(openapisdk.models.shared.ListLocationListsResponse listLocationListsResponse) {
        this.listLocationListsResponse = listLocationListsResponse;
        return this;
    }
    public Long statusCode;
    public DisplayvideoAdvertisersLocationListsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}