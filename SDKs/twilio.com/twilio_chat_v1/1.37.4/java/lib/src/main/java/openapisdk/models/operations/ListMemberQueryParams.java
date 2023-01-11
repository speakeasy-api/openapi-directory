package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListMemberQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Identity")
    public String[] identity;
    public ListMemberQueryParams withIdentity(String[] identity) {
        this.identity = identity;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PageSize")
    public Long pageSize;
    public ListMemberQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
}