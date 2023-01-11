package openapisdk.models.operations;



public class GetUserResponsivityResponse {
    public String contentType;
    public GetUserResponsivityResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public GetUserResponsivityResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public openapisdk.models.shared.ResponsivityList responsivityList;
    public GetUserResponsivityResponse withResponsivityList(openapisdk.models.shared.ResponsivityList responsivityList) {
        this.responsivityList = responsivityList;
        return this;
    }
    public Long statusCode;
    public GetUserResponsivityResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}