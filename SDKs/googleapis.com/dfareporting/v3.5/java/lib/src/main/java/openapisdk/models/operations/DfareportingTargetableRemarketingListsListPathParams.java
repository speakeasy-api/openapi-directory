package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DfareportingTargetableRemarketingListsListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=profileId")
    public String profileId;
    public DfareportingTargetableRemarketingListsListPathParams withProfileId(String profileId) {
        this.profileId = profileId;
        return this;
    }
}