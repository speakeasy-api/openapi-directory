package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TemplatesFetchAllQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=limit")
    public Long limit;
    public TemplatesFetchAllQueryParams withLimit(Long limit) {
        this.limit = limit;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=name")
    public String name;
    public TemplatesFetchAllQueryParams withName(String name) {
        this.name = name;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=offset")
    public Long offset;
    public TemplatesFetchAllQueryParams withOffset(Long offset) {
        this.offset = offset;
        return this;
    }
}