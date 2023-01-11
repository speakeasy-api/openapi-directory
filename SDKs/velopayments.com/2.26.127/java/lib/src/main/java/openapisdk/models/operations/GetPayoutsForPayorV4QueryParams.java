package openapisdk.models.operations;

import java.time.LocalDate;
import openapisdk.utils.SpeakeasyMetadata;

public class GetPayoutsForPayorV4QueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=fromPayorName")
    public String fromPayorName;
    public GetPayoutsForPayorV4QueryParams withFromPayorName(String fromPayorName) {
        this.fromPayorName = fromPayorName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Integer page;
    public GetPayoutsForPayorV4QueryParams withPage(Integer page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=pageSize")
    public Integer pageSize;
    public GetPayoutsForPayorV4QueryParams withPageSize(Integer pageSize) {
        this.pageSize = pageSize;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=payorId")
    public String payorId;
    public GetPayoutsForPayorV4QueryParams withPayorId(String payorId) {
        this.payorId = payorId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=payoutMemo")
    public String payoutMemo;
    public GetPayoutsForPayorV4QueryParams withPayoutMemo(String payoutMemo) {
        this.payoutMemo = payoutMemo;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort")
    public String sort;
    public GetPayoutsForPayorV4QueryParams withSort(String sort) {
        this.sort = sort;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=status")
    public GetPayoutsForPayorV4StatusEnum status;
    public GetPayoutsForPayorV4QueryParams withStatus(GetPayoutsForPayorV4StatusEnum status) {
        this.status = status;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=submittedDateFrom")
    public LocalDate submittedDateFrom;
    public GetPayoutsForPayorV4QueryParams withSubmittedDateFrom(LocalDate submittedDateFrom) {
        this.submittedDateFrom = submittedDateFrom;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=submittedDateTo")
    public LocalDate submittedDateTo;
    public GetPayoutsForPayorV4QueryParams withSubmittedDateTo(LocalDate submittedDateTo) {
        this.submittedDateTo = submittedDateTo;
        return this;
    }
}