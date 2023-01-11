package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostV4PayeesPayeeIdRemoteIdUpdatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=payeeId")
    public String payeeId;
    public PostV4PayeesPayeeIdRemoteIdUpdatePathParams withPayeeId(String payeeId) {
        this.payeeId = payeeId;
        return this;
    }
}