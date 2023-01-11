package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetUntaggedImagesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=iterationId")
    public String iterationId;
    public GetUntaggedImagesQueryParams withIterationId(String iterationId) {
        this.iterationId = iterationId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=orderBy")
    public GetUntaggedImagesOrderByEnum orderBy;
    public GetUntaggedImagesQueryParams withOrderBy(GetUntaggedImagesOrderByEnum orderBy) {
        this.orderBy = orderBy;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=skip")
    public Integer skip;
    public GetUntaggedImagesQueryParams withSkip(Integer skip) {
        this.skip = skip;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=take")
    public Integer take;
    public GetUntaggedImagesQueryParams withTake(Integer take) {
        this.take = take;
        return this;
    }
}