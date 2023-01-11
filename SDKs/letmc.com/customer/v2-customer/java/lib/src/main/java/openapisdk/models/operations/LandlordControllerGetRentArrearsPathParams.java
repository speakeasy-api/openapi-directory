package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class LandlordControllerGetRentArrearsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=shortName")
    public String shortName;
    public LandlordControllerGetRentArrearsPathParams withShortName(String shortName) {
        this.shortName = shortName;
        return this;
    }
}