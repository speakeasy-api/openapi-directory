package openapisdk.models.operations;



public class ContentLiasettingsListposdataprovidersResponse {
    public String contentType;
    public ContentLiasettingsListposdataprovidersResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.LiasettingsListPosDataProvidersResponse liasettingsListPosDataProvidersResponse;
    public ContentLiasettingsListposdataprovidersResponse withLiasettingsListPosDataProvidersResponse(openapisdk.models.shared.LiasettingsListPosDataProvidersResponse liasettingsListPosDataProvidersResponse) {
        this.liasettingsListPosDataProvidersResponse = liasettingsListPosDataProvidersResponse;
        return this;
    }
    public Long statusCode;
    public ContentLiasettingsListposdataprovidersResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}