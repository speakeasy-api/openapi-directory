package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SecuritycenterProjectsSourcesFindingsExternalSystemsPatchRequest {
    public SecuritycenterProjectsSourcesFindingsExternalSystemsPatchPathParams pathParams;
    public SecuritycenterProjectsSourcesFindingsExternalSystemsPatchRequest withPathParams(SecuritycenterProjectsSourcesFindingsExternalSystemsPatchPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public SecuritycenterProjectsSourcesFindingsExternalSystemsPatchQueryParams queryParams;
    public SecuritycenterProjectsSourcesFindingsExternalSystemsPatchRequest withQueryParams(SecuritycenterProjectsSourcesFindingsExternalSystemsPatchQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GoogleCloudSecuritycenterV1ExternalSystem request;
    public SecuritycenterProjectsSourcesFindingsExternalSystemsPatchRequest withRequest(openapisdk.models.shared.GoogleCloudSecuritycenterV1ExternalSystem request) {
        this.request = request;
        return this;
    }
    public SecuritycenterProjectsSourcesFindingsExternalSystemsPatchSecurity security;
    public SecuritycenterProjectsSourcesFindingsExternalSystemsPatchRequest withSecurity(SecuritycenterProjectsSourcesFindingsExternalSystemsPatchSecurity security) {
        this.security = security;
        return this;
    }
}