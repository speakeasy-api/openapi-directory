package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListShortCodeQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=FriendlyName")
    public String friendlyName;
    public ListShortCodeQueryParams withFriendlyName(String friendlyName) {
        this.friendlyName = friendlyName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PageSize")
    public Long pageSize;
    public ListShortCodeQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ShortCode")
    public String shortCode;
    public ListShortCodeQueryParams withShortCode(String shortCode) {
        this.shortCode = shortCode;
        return this;
    }
}