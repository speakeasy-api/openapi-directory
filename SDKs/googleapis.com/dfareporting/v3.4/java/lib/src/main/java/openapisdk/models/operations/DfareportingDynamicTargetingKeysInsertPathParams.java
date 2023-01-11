package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DfareportingDynamicTargetingKeysInsertPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=profileId")
    public String profileId;
    public DfareportingDynamicTargetingKeysInsertPathParams withProfileId(String profileId) {
        this.profileId = profileId;
        return this;
    }
}