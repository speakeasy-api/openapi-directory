package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetPayeesInvitationStatusV4PathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=payorId")
    public String payorId;
    public GetPayeesInvitationStatusV4PathParams withPayorId(String payorId) {
        this.payorId = payorId;
        return this;
    }
}