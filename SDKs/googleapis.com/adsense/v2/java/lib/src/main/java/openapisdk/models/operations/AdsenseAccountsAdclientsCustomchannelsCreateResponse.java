package openapisdk.models.operations;



public class AdsenseAccountsAdclientsCustomchannelsCreateResponse {
    public String contentType;
    public AdsenseAccountsAdclientsCustomchannelsCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CustomChannel customChannel;
    public AdsenseAccountsAdclientsCustomchannelsCreateResponse withCustomChannel(openapisdk.models.shared.CustomChannel customChannel) {
        this.customChannel = customChannel;
        return this;
    }
    public Long statusCode;
    public AdsenseAccountsAdclientsCustomchannelsCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}