package openapisdk.models.operations;



public class RunProjectsLocationsServicesSetIamPolicyResponse {
    public String contentType;
    public RunProjectsLocationsServicesSetIamPolicyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleIamV1Policy googleIamV1Policy;
    public RunProjectsLocationsServicesSetIamPolicyResponse withGoogleIamV1Policy(openapisdk.models.shared.GoogleIamV1Policy googleIamV1Policy) {
        this.googleIamV1Policy = googleIamV1Policy;
        return this;
    }
    public Long statusCode;
    public RunProjectsLocationsServicesSetIamPolicyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}