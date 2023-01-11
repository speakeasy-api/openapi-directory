package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetMapPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=versionNumber")
    public Long versionNumber;
    public GetMapPathParams withVersionNumber(Long versionNumber) {
        this.versionNumber = versionNumber;
        return this;
    }
}