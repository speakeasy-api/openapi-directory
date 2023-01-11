package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DfareportingPlacementStrategiesUpdatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=profileId")
    public String profileId;
    public DfareportingPlacementStrategiesUpdatePathParams withProfileId(String profileId) {
        this.profileId = profileId;
        return this;
    }
}