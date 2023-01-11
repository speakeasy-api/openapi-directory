package openapisdk.models.operations;



public class CloudshellUsersEnvironmentsGetResponse {
    public String contentType;
    public CloudshellUsersEnvironmentsGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Environment environment;
    public CloudshellUsersEnvironmentsGetResponse withEnvironment(openapisdk.models.shared.Environment environment) {
        this.environment = environment;
        return this;
    }
    public Long statusCode;
    public CloudshellUsersEnvironmentsGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}