package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListUserBindingQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=BindingType")
    public openapisdk.models.shared.UserBindingEnumBindingTypeEnum[] bindingType;
    public ListUserBindingQueryParams withBindingType(openapisdk.models.shared.UserBindingEnumBindingTypeEnum[] bindingType) {
        this.bindingType = bindingType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PageSize")
    public Long pageSize;
    public ListUserBindingQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
}