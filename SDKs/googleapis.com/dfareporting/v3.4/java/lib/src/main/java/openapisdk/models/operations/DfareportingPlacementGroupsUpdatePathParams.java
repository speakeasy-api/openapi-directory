package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DfareportingPlacementGroupsUpdatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=profileId")
    public String profileId;
    public DfareportingPlacementGroupsUpdatePathParams withProfileId(String profileId) {
        this.profileId = profileId;
        return this;
    }
}