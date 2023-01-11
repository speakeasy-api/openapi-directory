package openapisdk.models.operations;



public class PolicytroubleshooterIamTroubleshootResponse {
    public String contentType;
    public PolicytroubleshooterIamTroubleshootResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleCloudPolicytroubleshooterV1betaTroubleshootIamPolicyResponse googleCloudPolicytroubleshooterV1betaTroubleshootIamPolicyResponse;
    public PolicytroubleshooterIamTroubleshootResponse withGoogleCloudPolicytroubleshooterV1betaTroubleshootIamPolicyResponse(openapisdk.models.shared.GoogleCloudPolicytroubleshooterV1betaTroubleshootIamPolicyResponse googleCloudPolicytroubleshooterV1betaTroubleshootIamPolicyResponse) {
        this.googleCloudPolicytroubleshooterV1betaTroubleshootIamPolicyResponse = googleCloudPolicytroubleshooterV1betaTroubleshootIamPolicyResponse;
        return this;
    }
    public Long statusCode;
    public PolicytroubleshooterIamTroubleshootResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}