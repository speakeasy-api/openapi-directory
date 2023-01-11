package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DfareportingCreativeGroupsUpdatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=profileId")
    public String profileId;
    public DfareportingCreativeGroupsUpdatePathParams withProfileId(String profileId) {
        this.profileId = profileId;
        return this;
    }
}