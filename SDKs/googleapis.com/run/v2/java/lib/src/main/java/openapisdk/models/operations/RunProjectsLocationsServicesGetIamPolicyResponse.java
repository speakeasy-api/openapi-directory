package openapisdk.models.operations;



public class RunProjectsLocationsServicesGetIamPolicyResponse {
    public String contentType;
    public RunProjectsLocationsServicesGetIamPolicyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleIamV1Policy googleIamV1Policy;
    public RunProjectsLocationsServicesGetIamPolicyResponse withGoogleIamV1Policy(openapisdk.models.shared.GoogleIamV1Policy googleIamV1Policy) {
        this.googleIamV1Policy = googleIamV1Policy;
        return this;
    }
    public Long statusCode;
    public RunProjectsLocationsServicesGetIamPolicyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}