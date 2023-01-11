package openapisdk.models.operations;



public class ResetActiveWidgetTokenResponse {
    public openapisdk.models.shared.ActiveWidget activeWidget;
    public ResetActiveWidgetTokenResponse withActiveWidget(openapisdk.models.shared.ActiveWidget activeWidget) {
        this.activeWidget = activeWidget;
        return this;
    }
    public String contentType;
    public ResetActiveWidgetTokenResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public ResetActiveWidgetTokenResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public Long statusCode;
    public ResetActiveWidgetTokenResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}