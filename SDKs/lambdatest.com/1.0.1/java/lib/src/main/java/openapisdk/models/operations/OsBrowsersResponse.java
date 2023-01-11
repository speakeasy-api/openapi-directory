package openapisdk.models.operations;



public class OsBrowsersResponse {
    public Object accessDenied;
    public OsBrowsersResponse withAccessDenied(Object accessDenied) {
        this.accessDenied = accessDenied;
        return this;
    }
    public String contentType;
    public OsBrowsersResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public OsBrowsersResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object osBrowsers;
    public OsBrowsersResponse withOsBrowsers(Object osBrowsers) {
        this.osBrowsers = osBrowsers;
        return this;
    }
}