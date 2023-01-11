package openapisdk.models.operations;



public class DisplayvideoAdvertisersChannelsSitesListResponse {
    public String contentType;
    public DisplayvideoAdvertisersChannelsSitesListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListSitesResponse listSitesResponse;
    public DisplayvideoAdvertisersChannelsSitesListResponse withListSitesResponse(openapisdk.models.shared.ListSitesResponse listSitesResponse) {
        this.listSitesResponse = listSitesResponse;
        return this;
    }
    public Long statusCode;
    public DisplayvideoAdvertisersChannelsSitesListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}