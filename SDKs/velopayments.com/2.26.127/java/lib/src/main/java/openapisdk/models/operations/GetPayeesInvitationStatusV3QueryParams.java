package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetPayeesInvitationStatusV3QueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=invitationStatus")
    public openapisdk.models.shared.InvitationStatusEnum invitationStatus;
    public GetPayeesInvitationStatusV3QueryParams withInvitationStatus(openapisdk.models.shared.InvitationStatusEnum invitationStatus) {
        this.invitationStatus = invitationStatus;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Integer page;
    public GetPayeesInvitationStatusV3QueryParams withPage(Integer page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=pageSize")
    public Integer pageSize;
    public GetPayeesInvitationStatusV3QueryParams withPageSize(Integer pageSize) {
        this.pageSize = pageSize;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=payeeId")
    public String payeeId;
    public GetPayeesInvitationStatusV3QueryParams withPayeeId(String payeeId) {
        this.payeeId = payeeId;
        return this;
    }
}