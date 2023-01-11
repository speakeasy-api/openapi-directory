package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListWorkspaceQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=FriendlyName")
    public String friendlyName;
    public ListWorkspaceQueryParams withFriendlyName(String friendlyName) {
        this.friendlyName = friendlyName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PageSize")
    public Long pageSize;
    public ListWorkspaceQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
}