package openapisdk.models.operations;

import java.time.LocalDate;
import openapisdk.utils.SpeakeasyMetadata;

public class GetPaymentsForPayoutPaV3QueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Integer page;
    public GetPaymentsForPayoutPaV3QueryParams withPage(Integer page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=pageSize")
    public Integer pageSize;
    public GetPaymentsForPayoutPaV3QueryParams withPageSize(Integer pageSize) {
        this.pageSize = pageSize;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=paymentAmountFrom")
    public Integer paymentAmountFrom;
    public GetPaymentsForPayoutPaV3QueryParams withPaymentAmountFrom(Integer paymentAmountFrom) {
        this.paymentAmountFrom = paymentAmountFrom;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=paymentAmountTo")
    public Integer paymentAmountTo;
    public GetPaymentsForPayoutPaV3QueryParams withPaymentAmountTo(Integer paymentAmountTo) {
        this.paymentAmountTo = paymentAmountTo;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=remoteId")
    public String remoteId;
    public GetPaymentsForPayoutPaV3QueryParams withRemoteId(String remoteId) {
        this.remoteId = remoteId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sensitive")
    public Boolean sensitive;
    public GetPaymentsForPayoutPaV3QueryParams withSensitive(Boolean sensitive) {
        this.sensitive = sensitive;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort")
    public String sort;
    public GetPaymentsForPayoutPaV3QueryParams withSort(String sort) {
        this.sort = sort;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sourceAmountFrom")
    public Integer sourceAmountFrom;
    public GetPaymentsForPayoutPaV3QueryParams withSourceAmountFrom(Integer sourceAmountFrom) {
        this.sourceAmountFrom = sourceAmountFrom;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sourceAmountTo")
    public Integer sourceAmountTo;
    public GetPaymentsForPayoutPaV3QueryParams withSourceAmountTo(Integer sourceAmountTo) {
        this.sourceAmountTo = sourceAmountTo;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=status")
    public GetPaymentsForPayoutPaV3StatusEnum status;
    public GetPaymentsForPayoutPaV3QueryParams withStatus(GetPaymentsForPayoutPaV3StatusEnum status) {
        this.status = status;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=submittedDateFrom")
    public LocalDate submittedDateFrom;
    public GetPaymentsForPayoutPaV3QueryParams withSubmittedDateFrom(LocalDate submittedDateFrom) {
        this.submittedDateFrom = submittedDateFrom;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=submittedDateTo")
    public LocalDate submittedDateTo;
    public GetPaymentsForPayoutPaV3QueryParams withSubmittedDateTo(LocalDate submittedDateTo) {
        this.submittedDateTo = submittedDateTo;
        return this;
    }
}