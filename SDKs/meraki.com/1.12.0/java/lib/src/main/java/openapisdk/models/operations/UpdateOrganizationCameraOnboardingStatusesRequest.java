package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateOrganizationCameraOnboardingStatusesRequest {
    public UpdateOrganizationCameraOnboardingStatusesPathParams pathParams;
    public UpdateOrganizationCameraOnboardingStatusesRequest withPathParams(UpdateOrganizationCameraOnboardingStatusesPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateOrganizationCameraOnboardingStatusesRequestBody request;
    public UpdateOrganizationCameraOnboardingStatusesRequest withRequest(UpdateOrganizationCameraOnboardingStatusesRequestBody request) {
        this.request = request;
        return this;
    }
}