package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DfareportingRemarketingListsPatchPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=profileId")
    public String profileId;
    public DfareportingRemarketingListsPatchPathParams withProfileId(String profileId) {
        this.profileId = profileId;
        return this;
    }
}