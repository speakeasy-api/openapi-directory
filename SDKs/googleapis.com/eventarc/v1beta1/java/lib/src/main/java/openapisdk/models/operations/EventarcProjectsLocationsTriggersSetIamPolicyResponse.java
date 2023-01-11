package openapisdk.models.operations;



public class EventarcProjectsLocationsTriggersSetIamPolicyResponse {
    public String contentType;
    public EventarcProjectsLocationsTriggersSetIamPolicyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Policy policy;
    public EventarcProjectsLocationsTriggersSetIamPolicyResponse withPolicy(openapisdk.models.shared.Policy policy) {
        this.policy = policy;
        return this;
    }
    public Long statusCode;
    public EventarcProjectsLocationsTriggersSetIamPolicyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}