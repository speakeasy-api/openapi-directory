package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListVoiceCountryQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PageSize")
    public Long pageSize;
    public ListVoiceCountryQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
}