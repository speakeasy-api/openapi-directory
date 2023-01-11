package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CheckKeyUsabilityPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=key")
    public String key;
    public CheckKeyUsabilityPathParams withKey(String key) {
        this.key = key;
        return this;
    }
}