package openapisdk.models.operations;



public class InjuriesHistoricalResponse {
    public String contentType;
    public InjuriesHistoricalResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object[] injuries;
    public InjuriesHistoricalResponse withInjuries(Object[] injuries) {
        this.injuries = injuries;
        return this;
    }
    public Long statusCode;
    public InjuriesHistoricalResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}