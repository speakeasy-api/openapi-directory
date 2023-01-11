package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostV3PayeesPayeeIdRemoteIdUpdatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=payeeId")
    public String payeeId;
    public PostV3PayeesPayeeIdRemoteIdUpdatePathParams withPayeeId(String payeeId) {
        this.payeeId = payeeId;
        return this;
    }
}