package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class LandlordControllerGetLandlordCrmEntriesPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=shortName")
    public String shortName;
    public LandlordControllerGetLandlordCrmEntriesPathParams withShortName(String shortName) {
        this.shortName = shortName;
        return this;
    }
}