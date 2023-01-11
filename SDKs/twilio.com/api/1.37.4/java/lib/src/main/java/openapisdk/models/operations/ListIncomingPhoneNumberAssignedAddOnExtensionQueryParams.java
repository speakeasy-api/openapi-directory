package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListIncomingPhoneNumberAssignedAddOnExtensionQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PageSize")
    public Long pageSize;
    public ListIncomingPhoneNumberAssignedAddOnExtensionQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
}