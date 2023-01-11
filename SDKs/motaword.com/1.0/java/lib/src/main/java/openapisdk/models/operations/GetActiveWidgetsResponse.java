package openapisdk.models.operations;



public class GetActiveWidgetsResponse {
    public openapisdk.models.shared.ActiveWidgetList activeWidgetList;
    public GetActiveWidgetsResponse withActiveWidgetList(openapisdk.models.shared.ActiveWidgetList activeWidgetList) {
        this.activeWidgetList = activeWidgetList;
        return this;
    }
    public String contentType;
    public GetActiveWidgetsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public GetActiveWidgetsResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public Long statusCode;
    public GetActiveWidgetsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}