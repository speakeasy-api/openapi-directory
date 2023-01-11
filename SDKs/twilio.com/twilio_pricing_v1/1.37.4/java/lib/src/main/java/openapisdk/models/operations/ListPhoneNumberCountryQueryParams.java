package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListPhoneNumberCountryQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PageSize")
    public Long pageSize;
    public ListPhoneNumberCountryQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
}