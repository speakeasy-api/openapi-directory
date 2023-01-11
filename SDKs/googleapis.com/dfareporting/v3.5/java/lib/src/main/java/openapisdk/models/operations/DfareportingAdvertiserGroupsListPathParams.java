package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DfareportingAdvertiserGroupsListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=profileId")
    public String profileId;
    public DfareportingAdvertiserGroupsListPathParams withProfileId(String profileId) {
        this.profileId = profileId;
        return this;
    }
}