package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListFieldValueQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Language")
    public String language;
    public ListFieldValueQueryParams withLanguage(String language) {
        this.language = language;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PageSize")
    public Long pageSize;
    public ListFieldValueQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
}