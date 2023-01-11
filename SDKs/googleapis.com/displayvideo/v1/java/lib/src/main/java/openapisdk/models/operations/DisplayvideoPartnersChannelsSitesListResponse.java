package openapisdk.models.operations;



public class DisplayvideoPartnersChannelsSitesListResponse {
    public String contentType;
    public DisplayvideoPartnersChannelsSitesListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListSitesResponse listSitesResponse;
    public DisplayvideoPartnersChannelsSitesListResponse withListSitesResponse(openapisdk.models.shared.ListSitesResponse listSitesResponse) {
        this.listSitesResponse = listSitesResponse;
        return this;
    }
    public Long statusCode;
    public DisplayvideoPartnersChannelsSitesListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}