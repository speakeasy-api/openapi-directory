package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListAccountQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=FriendlyName")
    public String friendlyName;
    public ListAccountQueryParams withFriendlyName(String friendlyName) {
        this.friendlyName = friendlyName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PageSize")
    public Long pageSize;
    public ListAccountQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Status")
    public openapisdk.models.shared.AccountEnumStatusEnum status;
    public ListAccountQueryParams withStatus(openapisdk.models.shared.AccountEnumStatusEnum status) {
        this.status = status;
        return this;
    }
}