package openapisdk.models.operations;



public class WebfontsWebfontsListResponse {
    public String contentType;
    public WebfontsWebfontsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public WebfontsWebfontsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.WebfontList webfontList;
    public WebfontsWebfontsListResponse withWebfontList(openapisdk.models.shared.WebfontList webfontList) {
        this.webfontList = webfontList;
        return this;
    }
}