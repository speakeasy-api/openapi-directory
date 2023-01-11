package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetCapabilitiesPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=versionNumber")
    public Long versionNumber;
    public GetCapabilitiesPathParams withVersionNumber(Long versionNumber) {
        this.versionNumber = versionNumber;
        return this;
    }
}