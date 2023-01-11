package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SessionControllerChangePasswordPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=shortName")
    public String shortName;
    public SessionControllerChangePasswordPathParams withShortName(String shortName) {
        this.shortName = shortName;
        return this;
    }
}