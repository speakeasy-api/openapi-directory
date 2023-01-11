package openapisdk.models.operations;



public class DisplayvideoPartnersChannelsSitesBulkEditResponse {
    public openapisdk.models.shared.BulkEditSitesResponse bulkEditSitesResponse;
    public DisplayvideoPartnersChannelsSitesBulkEditResponse withBulkEditSitesResponse(openapisdk.models.shared.BulkEditSitesResponse bulkEditSitesResponse) {
        this.bulkEditSitesResponse = bulkEditSitesResponse;
        return this;
    }
    public String contentType;
    public DisplayvideoPartnersChannelsSitesBulkEditResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DisplayvideoPartnersChannelsSitesBulkEditResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}