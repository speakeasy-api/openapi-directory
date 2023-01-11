package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DfareportingRemarketingListSharesPatchPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=profileId")
    public String profileId;
    public DfareportingRemarketingListSharesPatchPathParams withProfileId(String profileId) {
        this.profileId = profileId;
        return this;
    }
}