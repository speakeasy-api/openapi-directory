package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListUnderstandSampleQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Language")
    public String language;
    public ListUnderstandSampleQueryParams withLanguage(String language) {
        this.language = language;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PageSize")
    public Long pageSize;
    public ListUnderstandSampleQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
}