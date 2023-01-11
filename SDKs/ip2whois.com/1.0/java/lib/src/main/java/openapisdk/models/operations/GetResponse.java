package openapisdk.models.operations;



public class GetResponse {
    public String contentType;
    public GetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public String get200TextHTMLString;
    public GetResponse withGet200TextHtmlString(String get200TextHTMLString) {
        this.get200TextHTMLString = get200TextHTMLString;
        return this;
    }
}