package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DfareportingBillingProfilesListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=profileId")
    public String profileId;
    public DfareportingBillingProfilesListPathParams withProfileId(String profileId) {
        this.profileId = profileId;
        return this;
    }
}