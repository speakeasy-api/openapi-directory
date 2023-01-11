package openapisdk.models.operations;



public class AdsenseAccountsAdclientsUrlchannelsListResponse {
    public String contentType;
    public AdsenseAccountsAdclientsUrlchannelsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListUrlChannelsResponse listUrlChannelsResponse;
    public AdsenseAccountsAdclientsUrlchannelsListResponse withListUrlChannelsResponse(openapisdk.models.shared.ListUrlChannelsResponse listUrlChannelsResponse) {
        this.listUrlChannelsResponse = listUrlChannelsResponse;
        return this;
    }
    public Long statusCode;
    public AdsenseAccountsAdclientsUrlchannelsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}