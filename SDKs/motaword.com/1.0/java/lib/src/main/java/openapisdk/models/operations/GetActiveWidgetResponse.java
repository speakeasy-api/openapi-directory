package openapisdk.models.operations;



public class GetActiveWidgetResponse {
    public openapisdk.models.shared.ActiveWidget activeWidget;
    public GetActiveWidgetResponse withActiveWidget(openapisdk.models.shared.ActiveWidget activeWidget) {
        this.activeWidget = activeWidget;
        return this;
    }
    public String contentType;
    public GetActiveWidgetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public GetActiveWidgetResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public Long statusCode;
    public GetActiveWidgetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}