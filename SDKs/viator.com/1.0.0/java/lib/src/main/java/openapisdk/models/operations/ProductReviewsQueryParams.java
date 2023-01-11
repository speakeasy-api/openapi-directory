package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ProductReviewsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=code")
    public String code;
    public ProductReviewsQueryParams withCode(String code) {
        this.code = code;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=showUnavailable")
    public Boolean showUnavailable;
    public ProductReviewsQueryParams withShowUnavailable(Boolean showUnavailable) {
        this.showUnavailable = showUnavailable;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sortOrder")
    public openapisdk.models.shared.SortOrderReviewEnum sortOrder;
    public ProductReviewsQueryParams withSortOrder(openapisdk.models.shared.SortOrderReviewEnum sortOrder) {
        this.sortOrder = sortOrder;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=topX")
    public String topX;
    public ProductReviewsQueryParams withTopX(String topX) {
        this.topX = topX;
        return this;
    }
}