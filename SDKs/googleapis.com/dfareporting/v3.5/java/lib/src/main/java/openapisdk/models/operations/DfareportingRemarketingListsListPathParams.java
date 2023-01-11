package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DfareportingRemarketingListsListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=profileId")
    public String profileId;
    public DfareportingRemarketingListsListPathParams withProfileId(String profileId) {
        this.profileId = profileId;
        return this;
    }
}