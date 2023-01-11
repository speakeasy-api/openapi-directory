package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=domain")
    public String domain;
    public ListQueryParams withDomain(String domain) {
        this.domain = domain;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=limit")
    public Long limit;
    public ListQueryParams withLimit(Long limit) {
        this.limit = limit;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=offset")
    public Long offset;
    public ListQueryParams withOffset(Long offset) {
        this.offset = offset;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=parentOrderId")
    public String parentOrderId;
    public ListQueryParams withParentOrderId(String parentOrderId) {
        this.parentOrderId = parentOrderId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=paymentProfileId")
    public Long paymentProfileId;
    public ListQueryParams withPaymentProfileId(Long paymentProfileId) {
        this.paymentProfileId = paymentProfileId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=periodEnd")
    public String periodEnd;
    public ListQueryParams withPeriodEnd(String periodEnd) {
        this.periodEnd = periodEnd;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=periodStart")
    public String periodStart;
    public ListQueryParams withPeriodStart(String periodStart) {
        this.periodStart = periodStart;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=productGroupId")
    public Long productGroupId;
    public ListQueryParams withProductGroupId(Long productGroupId) {
        this.productGroupId = productGroupId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort")
    public ListSortEnum sort;
    public ListQueryParams withSort(ListSortEnum sort) {
        this.sort = sort;
        return this;
    }
}