package openapisdk.models.operations;



public class PolicytroubleshooterIamTroubleshootResponse {
    public String contentType;
    public PolicytroubleshooterIamTroubleshootResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleCloudPolicytroubleshooterV1TroubleshootIamPolicyResponse googleCloudPolicytroubleshooterV1TroubleshootIamPolicyResponse;
    public PolicytroubleshooterIamTroubleshootResponse withGoogleCloudPolicytroubleshooterV1TroubleshootIamPolicyResponse(openapisdk.models.shared.GoogleCloudPolicytroubleshooterV1TroubleshootIamPolicyResponse googleCloudPolicytroubleshooterV1TroubleshootIamPolicyResponse) {
        this.googleCloudPolicytroubleshooterV1TroubleshootIamPolicyResponse = googleCloudPolicytroubleshooterV1TroubleshootIamPolicyResponse;
        return this;
    }
    public Long statusCode;
    public PolicytroubleshooterIamTroubleshootResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}