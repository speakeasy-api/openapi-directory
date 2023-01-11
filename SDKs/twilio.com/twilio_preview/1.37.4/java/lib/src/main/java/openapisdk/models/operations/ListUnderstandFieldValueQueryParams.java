package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListUnderstandFieldValueQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Language")
    public String language;
    public ListUnderstandFieldValueQueryParams withLanguage(String language) {
        this.language = language;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PageSize")
    public Long pageSize;
    public ListUnderstandFieldValueQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
}