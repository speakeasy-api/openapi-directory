package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetPayeesInvitationStatusV3PathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=payorId")
    public String payorId;
    public GetPayeesInvitationStatusV3PathParams withPayorId(String payorId) {
        this.payorId = payorId;
        return this;
    }
}