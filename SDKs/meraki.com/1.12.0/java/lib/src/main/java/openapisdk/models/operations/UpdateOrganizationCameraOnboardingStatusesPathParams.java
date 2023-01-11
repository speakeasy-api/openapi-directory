package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateOrganizationCameraOnboardingStatusesPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=organizationId")
    public String organizationId;
    public UpdateOrganizationCameraOnboardingStatusesPathParams withOrganizationId(String organizationId) {
        this.organizationId = organizationId;
        return this;
    }
}