package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListIncomingPhoneNumberAssignedAddOnQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PageSize")
    public Long pageSize;
    public ListIncomingPhoneNumberAssignedAddOnQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
}