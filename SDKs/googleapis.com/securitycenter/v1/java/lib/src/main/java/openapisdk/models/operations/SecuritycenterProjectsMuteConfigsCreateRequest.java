package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SecuritycenterProjectsMuteConfigsCreateRequest {
    public SecuritycenterProjectsMuteConfigsCreatePathParams pathParams;
    public SecuritycenterProjectsMuteConfigsCreateRequest withPathParams(SecuritycenterProjectsMuteConfigsCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public SecuritycenterProjectsMuteConfigsCreateQueryParams queryParams;
    public SecuritycenterProjectsMuteConfigsCreateRequest withQueryParams(SecuritycenterProjectsMuteConfigsCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GoogleCloudSecuritycenterV1MuteConfigInput request;
    public SecuritycenterProjectsMuteConfigsCreateRequest withRequest(openapisdk.models.shared.GoogleCloudSecuritycenterV1MuteConfigInput request) {
        this.request = request;
        return this;
    }
    public SecuritycenterProjectsMuteConfigsCreateSecurity security;
    public SecuritycenterProjectsMuteConfigsCreateRequest withSecurity(SecuritycenterProjectsMuteConfigsCreateSecurity security) {
        this.security = security;
        return this;
    }
}