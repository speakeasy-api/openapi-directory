package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DfareportingCreativeGroupsInsertPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=profileId")
    public String profileId;
    public DfareportingCreativeGroupsInsertPathParams withProfileId(String profileId) {
        this.profileId = profileId;
        return this;
    }
}