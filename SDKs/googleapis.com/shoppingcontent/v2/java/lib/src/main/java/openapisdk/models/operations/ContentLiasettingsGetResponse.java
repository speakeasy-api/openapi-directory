package openapisdk.models.operations;



public class ContentLiasettingsGetResponse {
    public String contentType;
    public ContentLiasettingsGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.LiaSettings liaSettings;
    public ContentLiasettingsGetResponse withLiaSettings(openapisdk.models.shared.LiaSettings liaSettings) {
        this.liaSettings = liaSettings;
        return this;
    }
    public Long statusCode;
    public ContentLiasettingsGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}