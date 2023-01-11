package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListConfigurationAddressQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PageSize")
    public Long pageSize;
    public ListConfigurationAddressQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Type")
    public String type;
    public ListConfigurationAddressQueryParams withType(String type) {
        this.type = type;
        return this;
    }
}