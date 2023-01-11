package openapisdk.models.operations;



public class AdsenseAccountsAdclientsCustomchannelsPatchResponse {
    public String contentType;
    public AdsenseAccountsAdclientsCustomchannelsPatchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CustomChannel customChannel;
    public AdsenseAccountsAdclientsCustomchannelsPatchResponse withCustomChannel(openapisdk.models.shared.CustomChannel customChannel) {
        this.customChannel = customChannel;
        return this;
    }
    public Long statusCode;
    public AdsenseAccountsAdclientsCustomchannelsPatchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}