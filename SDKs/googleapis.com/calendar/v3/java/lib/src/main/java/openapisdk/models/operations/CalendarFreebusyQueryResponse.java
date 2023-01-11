package openapisdk.models.operations;



public class CalendarFreebusyQueryResponse {
    public String contentType;
    public CalendarFreebusyQueryResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.FreeBusyResponse freeBusyResponse;
    public CalendarFreebusyQueryResponse withFreeBusyResponse(openapisdk.models.shared.FreeBusyResponse freeBusyResponse) {
        this.freeBusyResponse = freeBusyResponse;
        return this;
    }
    public Long statusCode;
    public CalendarFreebusyQueryResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}