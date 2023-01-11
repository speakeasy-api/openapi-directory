package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SessionControllerGetSessionInfoPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=shortName")
    public String shortName;
    public SessionControllerGetSessionInfoPathParams withShortName(String shortName) {
        this.shortName = shortName;
        return this;
    }
}