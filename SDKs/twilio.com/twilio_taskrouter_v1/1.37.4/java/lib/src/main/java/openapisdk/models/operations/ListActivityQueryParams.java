package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListActivityQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Available")
    public String available;
    public ListActivityQueryParams withAvailable(String available) {
        this.available = available;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=FriendlyName")
    public String friendlyName;
    public ListActivityQueryParams withFriendlyName(String friendlyName) {
        this.friendlyName = friendlyName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PageSize")
    public Long pageSize;
    public ListActivityQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
}