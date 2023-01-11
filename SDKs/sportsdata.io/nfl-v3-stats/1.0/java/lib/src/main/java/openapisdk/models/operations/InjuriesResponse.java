package openapisdk.models.operations;



public class InjuriesResponse {
    public String contentType;
    public InjuriesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object[] injuries;
    public InjuriesResponse withInjuries(Object[] injuries) {
        this.injuries = injuries;
        return this;
    }
    public Long statusCode;
    public InjuriesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}