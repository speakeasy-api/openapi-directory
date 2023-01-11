package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListBindingQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=BindingType")
    public openapisdk.models.shared.BindingEnumBindingTypeEnum[] bindingType;
    public ListBindingQueryParams withBindingType(openapisdk.models.shared.BindingEnumBindingTypeEnum[] bindingType) {
        this.bindingType = bindingType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Identity")
    public String[] identity;
    public ListBindingQueryParams withIdentity(String[] identity) {
        this.identity = identity;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PageSize")
    public Long pageSize;
    public ListBindingQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
}