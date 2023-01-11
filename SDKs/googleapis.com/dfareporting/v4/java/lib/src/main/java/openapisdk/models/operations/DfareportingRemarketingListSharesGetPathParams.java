package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DfareportingRemarketingListSharesGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=profileId")
    public String profileId;
    public DfareportingRemarketingListSharesGetPathParams withProfileId(String profileId) {
        this.profileId = profileId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=remarketingListId")
    public String remarketingListId;
    public DfareportingRemarketingListSharesGetPathParams withRemarketingListId(String remarketingListId) {
        this.remarketingListId = remarketingListId;
        return this;
    }
}