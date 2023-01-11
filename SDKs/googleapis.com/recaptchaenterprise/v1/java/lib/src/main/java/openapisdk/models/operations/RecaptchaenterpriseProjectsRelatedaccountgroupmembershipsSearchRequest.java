package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RecaptchaenterpriseProjectsRelatedaccountgroupmembershipsSearchRequest {
    public RecaptchaenterpriseProjectsRelatedaccountgroupmembershipsSearchPathParams pathParams;
    public RecaptchaenterpriseProjectsRelatedaccountgroupmembershipsSearchRequest withPathParams(RecaptchaenterpriseProjectsRelatedaccountgroupmembershipsSearchPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public RecaptchaenterpriseProjectsRelatedaccountgroupmembershipsSearchQueryParams queryParams;
    public RecaptchaenterpriseProjectsRelatedaccountgroupmembershipsSearchRequest withQueryParams(RecaptchaenterpriseProjectsRelatedaccountgroupmembershipsSearchQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GoogleCloudRecaptchaenterpriseV1SearchRelatedAccountGroupMembershipsRequest request;
    public RecaptchaenterpriseProjectsRelatedaccountgroupmembershipsSearchRequest withRequest(openapisdk.models.shared.GoogleCloudRecaptchaenterpriseV1SearchRelatedAccountGroupMembershipsRequest request) {
        this.request = request;
        return this;
    }
    public RecaptchaenterpriseProjectsRelatedaccountgroupmembershipsSearchSecurity security;
    public RecaptchaenterpriseProjectsRelatedaccountgroupmembershipsSearchRequest withSecurity(RecaptchaenterpriseProjectsRelatedaccountgroupmembershipsSearchSecurity security) {
        this.security = security;
        return this;
    }
}