package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DfareportingDynamicTargetingKeysListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=profileId")
    public String profileId;
    public DfareportingDynamicTargetingKeysListPathParams withProfileId(String profileId) {
        this.profileId = profileId;
        return this;
    }
}