package openapisdk.models.operations;



public class ContentLiasettingsUpdateResponse {
    public String contentType;
    public ContentLiasettingsUpdateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.LiaSettings liaSettings;
    public ContentLiasettingsUpdateResponse withLiaSettings(openapisdk.models.shared.LiaSettings liaSettings) {
        this.liaSettings = liaSettings;
        return this;
    }
    public Long statusCode;
    public ContentLiasettingsUpdateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}