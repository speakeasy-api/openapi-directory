package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DfareportingDynamicTargetingKeysDeletePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=objectId")
    public String objectId;
    public DfareportingDynamicTargetingKeysDeletePathParams withObjectId(String objectId) {
        this.objectId = objectId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=profileId")
    public String profileId;
    public DfareportingDynamicTargetingKeysDeletePathParams withProfileId(String profileId) {
        this.profileId = profileId;
        return this;
    }
}