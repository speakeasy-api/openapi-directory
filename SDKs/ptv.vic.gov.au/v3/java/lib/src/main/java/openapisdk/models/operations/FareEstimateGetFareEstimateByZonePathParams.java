package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FareEstimateGetFareEstimateByZonePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=maxZone")
    public Integer maxZone;
    public FareEstimateGetFareEstimateByZonePathParams withMaxZone(Integer maxZone) {
        this.maxZone = maxZone;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=minZone")
    public Integer minZone;
    public FareEstimateGetFareEstimateByZonePathParams withMinZone(Integer minZone) {
        this.minZone = minZone;
        return this;
    }
}