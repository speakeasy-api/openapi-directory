package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteLicenseePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=key")
    public String key;
    public DeleteLicenseePathParams withKey(String key) {
        this.key = key;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=licensee_key")
    public String licenseeKey;
    public DeleteLicenseePathParams withLicenseeKey(String licenseeKey) {
        this.licenseeKey = licenseeKey;
        return this;
    }
}