package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DfareportingPlacementStrategiesInsertPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=profileId")
    public String profileId;
    public DfareportingPlacementStrategiesInsertPathParams withProfileId(String profileId) {
        this.profileId = profileId;
        return this;
    }
}