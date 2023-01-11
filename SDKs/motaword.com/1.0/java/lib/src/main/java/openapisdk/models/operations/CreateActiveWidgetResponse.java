package openapisdk.models.operations;



public class CreateActiveWidgetResponse {
    public openapisdk.models.shared.ActiveWidget activeWidget;
    public CreateActiveWidgetResponse withActiveWidget(openapisdk.models.shared.ActiveWidget activeWidget) {
        this.activeWidget = activeWidget;
        return this;
    }
    public String contentType;
    public CreateActiveWidgetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public CreateActiveWidgetResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public Long statusCode;
    public CreateActiveWidgetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}