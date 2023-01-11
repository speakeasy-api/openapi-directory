package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SessionControllerResetPasswordPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=shortName")
    public String shortName;
    public SessionControllerResetPasswordPathParams withShortName(String shortName) {
        this.shortName = shortName;
        return this;
    }
}