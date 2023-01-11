package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetReviewsResourceTypeJsonQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=offset")
    public Long offset;
    public GetReviewsResourceTypeJsonQueryParams withOffset(Long offset) {
        this.offset = offset;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=order")
    public GetReviewsResourceTypeJsonOrderEnum order;
    public GetReviewsResourceTypeJsonQueryParams withOrder(GetReviewsResourceTypeJsonOrderEnum order) {
        this.order = order;
        return this;
    }
}