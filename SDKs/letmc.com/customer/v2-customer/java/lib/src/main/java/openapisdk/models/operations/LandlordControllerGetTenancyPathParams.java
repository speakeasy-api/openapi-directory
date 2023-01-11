package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class LandlordControllerGetTenancyPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=shortName")
    public String shortName;
    public LandlordControllerGetTenancyPathParams withShortName(String shortName) {
        this.shortName = shortName;
        return this;
    }
}