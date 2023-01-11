package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAccountKeyPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=key_id")
    public String keyId;
    public GetAccountKeyPathParams withKeyId(String keyId) {
        this.keyId = keyId;
        return this;
    }
}