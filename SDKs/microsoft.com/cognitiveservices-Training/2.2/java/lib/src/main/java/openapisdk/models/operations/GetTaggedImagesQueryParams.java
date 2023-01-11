package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetTaggedImagesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=iterationId")
    public String iterationId;
    public GetTaggedImagesQueryParams withIterationId(String iterationId) {
        this.iterationId = iterationId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=orderBy")
    public GetTaggedImagesOrderByEnum orderBy;
    public GetTaggedImagesQueryParams withOrderBy(GetTaggedImagesOrderByEnum orderBy) {
        this.orderBy = orderBy;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=skip")
    public Integer skip;
    public GetTaggedImagesQueryParams withSkip(Integer skip) {
        this.skip = skip;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=false,name=tagIds")
    public String[] tagIds;
    public GetTaggedImagesQueryParams withTagIds(String[] tagIds) {
        this.tagIds = tagIds;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=take")
    public Integer take;
    public GetTaggedImagesQueryParams withTake(Integer take) {
        this.take = take;
        return this;
    }
}