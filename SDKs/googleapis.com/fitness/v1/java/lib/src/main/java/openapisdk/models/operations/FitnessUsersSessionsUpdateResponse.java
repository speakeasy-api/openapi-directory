package openapisdk.models.operations;



public class FitnessUsersSessionsUpdateResponse {
    public String contentType;
    public FitnessUsersSessionsUpdateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Session session;
    public FitnessUsersSessionsUpdateResponse withSession(openapisdk.models.shared.Session session) {
        this.session = session;
        return this;
    }
    public Long statusCode;
    public FitnessUsersSessionsUpdateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}