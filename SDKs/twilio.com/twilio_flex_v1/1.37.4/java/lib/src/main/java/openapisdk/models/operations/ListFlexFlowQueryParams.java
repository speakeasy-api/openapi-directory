package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListFlexFlowQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=FriendlyName")
    public String friendlyName;
    public ListFlexFlowQueryParams withFriendlyName(String friendlyName) {
        this.friendlyName = friendlyName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PageSize")
    public Long pageSize;
    public ListFlexFlowQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
}