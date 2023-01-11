package openapisdk.models.operations;



public class UpdateActiveWidgetResponse {
    public openapisdk.models.shared.ActiveWidget activeWidget;
    public UpdateActiveWidgetResponse withActiveWidget(openapisdk.models.shared.ActiveWidget activeWidget) {
        this.activeWidget = activeWidget;
        return this;
    }
    public String contentType;
    public UpdateActiveWidgetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public UpdateActiveWidgetResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public Long statusCode;
    public UpdateActiveWidgetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}