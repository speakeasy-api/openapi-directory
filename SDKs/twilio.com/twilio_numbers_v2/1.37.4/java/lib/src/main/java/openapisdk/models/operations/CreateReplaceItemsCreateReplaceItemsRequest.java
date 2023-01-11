package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateReplaceItemsCreateReplaceItemsRequest {
    @SpeakeasyMetadata("form:name=FromBundleSid")
    public String fromBundleSid;
    public CreateReplaceItemsCreateReplaceItemsRequest withFromBundleSid(String fromBundleSid) {
        this.fromBundleSid = fromBundleSid;
        return this;
    }
}