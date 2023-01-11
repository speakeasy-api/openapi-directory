package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class LandlordControllerGetSummaryDetailsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=shortName")
    public String shortName;
    public LandlordControllerGetSummaryDetailsPathParams withShortName(String shortName) {
        this.shortName = shortName;
        return this;
    }
}