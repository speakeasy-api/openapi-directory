package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DfareportingPlacementStrategiesDeletePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public DfareportingPlacementStrategiesDeletePathParams withId(String id) {
        this.id = id;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=profileId")
    public String profileId;
    public DfareportingPlacementStrategiesDeletePathParams withProfileId(String profileId) {
        this.profileId = profileId;
        return this;
    }
}