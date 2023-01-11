package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateLicenseePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=key")
    public String key;
    public CreateLicenseePathParams withKey(String key) {
        this.key = key;
        return this;
    }
}