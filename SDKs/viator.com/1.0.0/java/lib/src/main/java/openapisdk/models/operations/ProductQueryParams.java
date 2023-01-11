package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ProductQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=code")
    public String code;
    public ProductQueryParams withCode(String code) {
        this.code = code;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=currencyCode")
    public String currencyCode;
    public ProductQueryParams withCurrencyCode(String currencyCode) {
        this.currencyCode = currencyCode;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=excludeTourGradeAvailability")
    public Boolean excludeTourGradeAvailability;
    public ProductQueryParams withExcludeTourGradeAvailability(Boolean excludeTourGradeAvailability) {
        this.excludeTourGradeAvailability = excludeTourGradeAvailability;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=showUnavailable")
    public Boolean showUnavailable;
    public ProductQueryParams withShowUnavailable(Boolean showUnavailable) {
        this.showUnavailable = showUnavailable;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sortOrder")
    public openapisdk.models.shared.SortOrderReviewEnum sortOrder;
    public ProductQueryParams withSortOrder(openapisdk.models.shared.SortOrderReviewEnum sortOrder) {
        this.sortOrder = sortOrder;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=voucherOption")
    public openapisdk.models.shared.SortOrderReviewEnum1 voucherOption;
    public ProductQueryParams withVoucherOption(openapisdk.models.shared.SortOrderReviewEnum1 voucherOption) {
        this.voucherOption = voucherOption;
        return this;
    }
}