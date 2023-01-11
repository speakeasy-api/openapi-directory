package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RetrieveLicenseePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=key")
    public String key;
    public RetrieveLicenseePathParams withKey(String key) {
        this.key = key;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=licensee_key")
    public String licenseeKey;
    public RetrieveLicenseePathParams withLicenseeKey(String licenseeKey) {
        this.licenseeKey = licenseeKey;
        return this;
    }
}