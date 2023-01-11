package openapisdk.models.operations;



public class BooksMyconfigRequestAccessResponse {
    public String contentType;
    public BooksMyconfigRequestAccessResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.RequestAccessData requestAccessData;
    public BooksMyconfigRequestAccessResponse withRequestAccessData(openapisdk.models.shared.RequestAccessData requestAccessData) {
        this.requestAccessData = requestAccessData;
        return this;
    }
    public Long statusCode;
    public BooksMyconfigRequestAccessResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}