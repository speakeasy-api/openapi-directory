package openapisdk.models.operations;



public class GetResponsivityResponse {
    public String contentType;
    public GetResponsivityResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public GetResponsivityResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public openapisdk.models.shared.ResponsivityList responsivityList;
    public GetResponsivityResponse withResponsivityList(openapisdk.models.shared.ResponsivityList responsivityList) {
        this.responsivityList = responsivityList;
        return this;
    }
    public Long statusCode;
    public GetResponsivityResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}