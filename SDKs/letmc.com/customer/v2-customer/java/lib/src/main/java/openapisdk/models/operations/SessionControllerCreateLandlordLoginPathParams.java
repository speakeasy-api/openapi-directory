package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SessionControllerCreateLandlordLoginPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=shortName")
    public String shortName;
    public SessionControllerCreateLandlordLoginPathParams withShortName(String shortName) {
        this.shortName = shortName;
        return this;
    }
}