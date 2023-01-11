package openapisdk.models.operations;



public class InjuriesByTeamResponse {
    public String contentType;
    public InjuriesByTeamResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object[] injuries;
    public InjuriesByTeamResponse withInjuries(Object[] injuries) {
        this.injuries = injuries;
        return this;
    }
    public Long statusCode;
    public InjuriesByTeamResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}