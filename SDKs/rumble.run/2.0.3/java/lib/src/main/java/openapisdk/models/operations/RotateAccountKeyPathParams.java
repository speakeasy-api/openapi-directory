package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RotateAccountKeyPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=key_id")
    public String keyId;
    public RotateAccountKeyPathParams withKeyId(String keyId) {
        this.keyId = keyId;
        return this;
    }
}