package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListServiceBindingQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=BindingType")
    public openapisdk.models.shared.ServiceBindingEnumBindingTypeEnum[] bindingType;
    public ListServiceBindingQueryParams withBindingType(openapisdk.models.shared.ServiceBindingEnumBindingTypeEnum[] bindingType) {
        this.bindingType = bindingType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Identity")
    public String[] identity;
    public ListServiceBindingQueryParams withIdentity(String[] identity) {
        this.identity = identity;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PageSize")
    public Long pageSize;
    public ListServiceBindingQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
}