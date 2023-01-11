package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ResendPayeeInviteV4PathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=payeeId")
    public String payeeId;
    public ResendPayeeInviteV4PathParams withPayeeId(String payeeId) {
        this.payeeId = payeeId;
        return this;
    }
}