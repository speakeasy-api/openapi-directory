package openapisdk.models.operations;



public class GetResourcesCampaignsIdMediaJsonResponse {
    public String contentType;
    public GetResourcesCampaignsIdMediaJsonResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.MediaItemWrapped mediaItemWrapped;
    public GetResourcesCampaignsIdMediaJsonResponse withMediaItemWrapped(openapisdk.models.shared.MediaItemWrapped mediaItemWrapped) {
        this.mediaItemWrapped = mediaItemWrapped;
        return this;
    }
    public Long statusCode;
    public GetResourcesCampaignsIdMediaJsonResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}