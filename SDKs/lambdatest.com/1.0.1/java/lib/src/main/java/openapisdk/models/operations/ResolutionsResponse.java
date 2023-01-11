package openapisdk.models.operations;



public class ResolutionsResponse {
    public Object accessDenied;
    public ResolutionsResponse withAccessDenied(Object accessDenied) {
        this.accessDenied = accessDenied;
        return this;
    }
    public String contentType;
    public ResolutionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ResolutionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object resolutions;
    public ResolutionsResponse withResolutions(Object resolutions) {
        this.resolutions = resolutions;
        return this;
    }
}