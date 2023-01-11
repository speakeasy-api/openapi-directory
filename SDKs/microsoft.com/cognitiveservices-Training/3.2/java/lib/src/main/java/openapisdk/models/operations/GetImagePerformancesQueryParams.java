package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetImagePerformancesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=orderBy")
    public GetImagePerformancesOrderByEnum orderBy;
    public GetImagePerformancesQueryParams withOrderBy(GetImagePerformancesOrderByEnum orderBy) {
        this.orderBy = orderBy;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=skip")
    public Integer skip;
    public GetImagePerformancesQueryParams withSkip(Integer skip) {
        this.skip = skip;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=false,name=tagIds")
    public String[] tagIds;
    public GetImagePerformancesQueryParams withTagIds(String[] tagIds) {
        this.tagIds = tagIds;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=take")
    public Integer take;
    public GetImagePerformancesQueryParams withTake(Integer take) {
        this.take = take;
        return this;
    }
}