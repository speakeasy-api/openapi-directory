package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class LandlordControllerGetInvetoryReportPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=shortName")
    public String shortName;
    public LandlordControllerGetInvetoryReportPathParams withShortName(String shortName) {
        this.shortName = shortName;
        return this;
    }
}