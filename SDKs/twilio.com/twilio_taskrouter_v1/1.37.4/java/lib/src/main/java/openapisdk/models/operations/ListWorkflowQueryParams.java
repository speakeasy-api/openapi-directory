package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListWorkflowQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=FriendlyName")
    public String friendlyName;
    public ListWorkflowQueryParams withFriendlyName(String friendlyName) {
        this.friendlyName = friendlyName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PageSize")
    public Long pageSize;
    public ListWorkflowQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
}