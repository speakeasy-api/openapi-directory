package openapisdk.models.operations;



public class RefereesResponse {
    public String contentType;
    public RefereesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object[] referees;
    public RefereesResponse withReferees(Object[] referees) {
        this.referees = referees;
        return this;
    }
    public Long statusCode;
    public RefereesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}