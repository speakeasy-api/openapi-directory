package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DfareportingBillingProfilesGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public DfareportingBillingProfilesGetPathParams withId(String id) {
        this.id = id;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=profileId")
    public String profileId;
    public DfareportingBillingProfilesGetPathParams withProfileId(String profileId) {
        this.profileId = profileId;
        return this;
    }
}