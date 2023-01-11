package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetOrganizationCameraOnboardingStatusesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=false,name=networkIds")
    public String[] networkIds;
    public GetOrganizationCameraOnboardingStatusesQueryParams withNetworkIds(String[] networkIds) {
        this.networkIds = networkIds;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=false,name=serials")
    public String[] serials;
    public GetOrganizationCameraOnboardingStatusesQueryParams withSerials(String[] serials) {
        this.serials = serials;
        return this;
    }
}