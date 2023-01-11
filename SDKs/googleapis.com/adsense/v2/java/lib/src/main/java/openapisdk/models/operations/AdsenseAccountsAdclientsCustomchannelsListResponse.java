package openapisdk.models.operations;



public class AdsenseAccountsAdclientsCustomchannelsListResponse {
    public String contentType;
    public AdsenseAccountsAdclientsCustomchannelsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListCustomChannelsResponse listCustomChannelsResponse;
    public AdsenseAccountsAdclientsCustomchannelsListResponse withListCustomChannelsResponse(openapisdk.models.shared.ListCustomChannelsResponse listCustomChannelsResponse) {
        this.listCustomChannelsResponse = listCustomChannelsResponse;
        return this;
    }
    public Long statusCode;
    public AdsenseAccountsAdclientsCustomchannelsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}