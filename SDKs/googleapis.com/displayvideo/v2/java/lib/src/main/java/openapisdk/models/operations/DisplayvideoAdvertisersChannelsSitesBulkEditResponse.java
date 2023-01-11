package openapisdk.models.operations;



public class DisplayvideoAdvertisersChannelsSitesBulkEditResponse {
    public openapisdk.models.shared.BulkEditSitesResponse bulkEditSitesResponse;
    public DisplayvideoAdvertisersChannelsSitesBulkEditResponse withBulkEditSitesResponse(openapisdk.models.shared.BulkEditSitesResponse bulkEditSitesResponse) {
        this.bulkEditSitesResponse = bulkEditSitesResponse;
        return this;
    }
    public String contentType;
    public DisplayvideoAdvertisersChannelsSitesBulkEditResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DisplayvideoAdvertisersChannelsSitesBulkEditResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}