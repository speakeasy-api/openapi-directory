package openapisdk.models.operations;



public class ContentLiasettingsSetposdataproviderResponse {
    public String contentType;
    public ContentLiasettingsSetposdataproviderResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.LiasettingsSetPosDataProviderResponse liasettingsSetPosDataProviderResponse;
    public ContentLiasettingsSetposdataproviderResponse withLiasettingsSetPosDataProviderResponse(openapisdk.models.shared.LiasettingsSetPosDataProviderResponse liasettingsSetPosDataProviderResponse) {
        this.liasettingsSetPosDataProviderResponse = liasettingsSetPosDataProviderResponse;
        return this;
    }
    public Long statusCode;
    public ContentLiasettingsSetposdataproviderResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}