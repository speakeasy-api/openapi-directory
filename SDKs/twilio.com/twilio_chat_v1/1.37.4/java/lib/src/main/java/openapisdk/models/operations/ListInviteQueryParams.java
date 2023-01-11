package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListInviteQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Identity")
    public String[] identity;
    public ListInviteQueryParams withIdentity(String[] identity) {
        this.identity = identity;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PageSize")
    public Long pageSize;
    public ListInviteQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
}