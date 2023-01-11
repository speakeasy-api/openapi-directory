package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateOrganizationAdaptivePolicySettingsRequest {
    public UpdateOrganizationAdaptivePolicySettingsPathParams pathParams;
    public UpdateOrganizationAdaptivePolicySettingsRequest withPathParams(UpdateOrganizationAdaptivePolicySettingsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateOrganizationAdaptivePolicySettingsRequestBody request;
    public UpdateOrganizationAdaptivePolicySettingsRequest withRequest(UpdateOrganizationAdaptivePolicySettingsRequestBody request) {
        this.request = request;
        return this;
    }
}