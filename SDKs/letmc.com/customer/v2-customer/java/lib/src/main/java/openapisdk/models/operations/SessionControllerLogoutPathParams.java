package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SessionControllerLogoutPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=shortName")
    public String shortName;
    public SessionControllerLogoutPathParams withShortName(String shortName) {
        this.shortName = shortName;
        return this;
    }
}