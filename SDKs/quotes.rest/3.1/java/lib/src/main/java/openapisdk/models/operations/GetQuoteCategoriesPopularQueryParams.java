package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetQuoteCategoriesPopularQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=limit")
    public Integer limit;
    public GetQuoteCategoriesPopularQueryParams withLimit(Integer limit) {
        this.limit = limit;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=start")
    public Integer start;
    public GetQuoteCategoriesPopularQueryParams withStart(Integer start) {
        this.start = start;
        return this;
    }
}