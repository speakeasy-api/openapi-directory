package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RemoveAccountKeyPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=key_id")
    public String keyId;
    public RemoveAccountKeyPathParams withKeyId(String keyId) {
        this.keyId = keyId;
        return this;
    }
}