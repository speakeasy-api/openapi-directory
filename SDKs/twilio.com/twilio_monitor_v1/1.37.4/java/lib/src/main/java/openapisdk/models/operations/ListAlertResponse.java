package openapisdk.models.operations;



public class ListAlertResponse {
    public String contentType;
    public ListAlertResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public ListAlertListAlertResponse listAlertResponse;
    public ListAlertResponse withListAlertResponse(ListAlertListAlertResponse listAlertResponse) {
        this.listAlertResponse = listAlertResponse;
        return this;
    }
    public Long statusCode;
    public ListAlertResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}