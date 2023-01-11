package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListDependentPhoneNumberQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PageSize")
    public Long pageSize;
    public ListDependentPhoneNumberQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
}