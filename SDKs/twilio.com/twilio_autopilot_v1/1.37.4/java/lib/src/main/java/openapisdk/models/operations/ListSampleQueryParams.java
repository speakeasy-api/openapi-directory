package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListSampleQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Language")
    public String language;
    public ListSampleQueryParams withLanguage(String language) {
        this.language = language;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PageSize")
    public Long pageSize;
    public ListSampleQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
}