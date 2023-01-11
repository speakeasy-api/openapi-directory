package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PolicytroubleshooterIamTroubleshootRequest {
    public PolicytroubleshooterIamTroubleshootQueryParams queryParams;
    public PolicytroubleshooterIamTroubleshootRequest withQueryParams(PolicytroubleshooterIamTroubleshootQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GoogleCloudPolicytroubleshooterV1TroubleshootIamPolicyRequest request;
    public PolicytroubleshooterIamTroubleshootRequest withRequest(openapisdk.models.shared.GoogleCloudPolicytroubleshooterV1TroubleshootIamPolicyRequest request) {
        this.request = request;
        return this;
    }
    public PolicytroubleshooterIamTroubleshootSecurity security;
    public PolicytroubleshooterIamTroubleshootRequest withSecurity(PolicytroubleshooterIamTroubleshootSecurity security) {
        this.security = security;
        return this;
    }
}