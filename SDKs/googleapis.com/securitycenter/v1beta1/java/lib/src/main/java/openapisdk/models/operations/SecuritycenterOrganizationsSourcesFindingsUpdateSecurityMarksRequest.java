package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SecuritycenterOrganizationsSourcesFindingsUpdateSecurityMarksRequest {
    public SecuritycenterOrganizationsSourcesFindingsUpdateSecurityMarksPathParams pathParams;
    public SecuritycenterOrganizationsSourcesFindingsUpdateSecurityMarksRequest withPathParams(SecuritycenterOrganizationsSourcesFindingsUpdateSecurityMarksPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public SecuritycenterOrganizationsSourcesFindingsUpdateSecurityMarksQueryParams queryParams;
    public SecuritycenterOrganizationsSourcesFindingsUpdateSecurityMarksRequest withQueryParams(SecuritycenterOrganizationsSourcesFindingsUpdateSecurityMarksQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GoogleCloudSecuritycenterV1beta1SecurityMarks request;
    public SecuritycenterOrganizationsSourcesFindingsUpdateSecurityMarksRequest withRequest(openapisdk.models.shared.GoogleCloudSecuritycenterV1beta1SecurityMarks request) {
        this.request = request;
        return this;
    }
    public SecuritycenterOrganizationsSourcesFindingsUpdateSecurityMarksSecurity security;
    public SecuritycenterOrganizationsSourcesFindingsUpdateSecurityMarksRequest withSecurity(SecuritycenterOrganizationsSourcesFindingsUpdateSecurityMarksSecurity security) {
        this.security = security;
        return this;
    }
}