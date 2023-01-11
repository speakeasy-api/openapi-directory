package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateLicenseePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=key")
    public String key;
    public UpdateLicenseePathParams withKey(String key) {
        this.key = key;
        return this;
    }
}