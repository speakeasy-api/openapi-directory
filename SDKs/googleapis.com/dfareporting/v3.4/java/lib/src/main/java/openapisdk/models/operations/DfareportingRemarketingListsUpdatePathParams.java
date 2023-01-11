package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DfareportingRemarketingListsUpdatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=profileId")
    public String profileId;
    public DfareportingRemarketingListsUpdatePathParams withProfileId(String profileId) {
        this.profileId = profileId;
        return this;
    }
}