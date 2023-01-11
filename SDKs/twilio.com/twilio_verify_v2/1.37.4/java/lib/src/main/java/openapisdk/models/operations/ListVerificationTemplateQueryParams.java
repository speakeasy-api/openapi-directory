package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListVerificationTemplateQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=FriendlyName")
    public String friendlyName;
    public ListVerificationTemplateQueryParams withFriendlyName(String friendlyName) {
        this.friendlyName = friendlyName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PageSize")
    public Long pageSize;
    public ListVerificationTemplateQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
}