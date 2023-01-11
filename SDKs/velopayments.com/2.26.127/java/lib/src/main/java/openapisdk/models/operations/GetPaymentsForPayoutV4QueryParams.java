package openapisdk.models.operations;

import java.time.LocalDate;
import openapisdk.utils.SpeakeasyMetadata;

public class GetPaymentsForPayoutV4QueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Integer page;
    public GetPaymentsForPayoutV4QueryParams withPage(Integer page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=pageSize")
    public Integer pageSize;
    public GetPaymentsForPayoutV4QueryParams withPageSize(Integer pageSize) {
        this.pageSize = pageSize;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=paymentAmountFrom")
    public Integer paymentAmountFrom;
    public GetPaymentsForPayoutV4QueryParams withPaymentAmountFrom(Integer paymentAmountFrom) {
        this.paymentAmountFrom = paymentAmountFrom;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=paymentAmountTo")
    public Integer paymentAmountTo;
    public GetPaymentsForPayoutV4QueryParams withPaymentAmountTo(Integer paymentAmountTo) {
        this.paymentAmountTo = paymentAmountTo;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=remoteId")
    public String remoteId;
    public GetPaymentsForPayoutV4QueryParams withRemoteId(String remoteId) {
        this.remoteId = remoteId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=remoteSystemId")
    public String remoteSystemId;
    public GetPaymentsForPayoutV4QueryParams withRemoteSystemId(String remoteSystemId) {
        this.remoteSystemId = remoteSystemId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sensitive")
    public Boolean sensitive;
    public GetPaymentsForPayoutV4QueryParams withSensitive(Boolean sensitive) {
        this.sensitive = sensitive;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort")
    public String sort;
    public GetPaymentsForPayoutV4QueryParams withSort(String sort) {
        this.sort = sort;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sourceAmountFrom")
    public Integer sourceAmountFrom;
    public GetPaymentsForPayoutV4QueryParams withSourceAmountFrom(Integer sourceAmountFrom) {
        this.sourceAmountFrom = sourceAmountFrom;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sourceAmountTo")
    public Integer sourceAmountTo;
    public GetPaymentsForPayoutV4QueryParams withSourceAmountTo(Integer sourceAmountTo) {
        this.sourceAmountTo = sourceAmountTo;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=status")
    public GetPaymentsForPayoutV4StatusEnum status;
    public GetPaymentsForPayoutV4QueryParams withStatus(GetPaymentsForPayoutV4StatusEnum status) {
        this.status = status;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=submittedDateFrom")
    public LocalDate submittedDateFrom;
    public GetPaymentsForPayoutV4QueryParams withSubmittedDateFrom(LocalDate submittedDateFrom) {
        this.submittedDateFrom = submittedDateFrom;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=submittedDateTo")
    public LocalDate submittedDateTo;
    public GetPaymentsForPayoutV4QueryParams withSubmittedDateTo(LocalDate submittedDateTo) {
        this.submittedDateTo = submittedDateTo;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=transmissionType")
    public GetPaymentsForPayoutV4TransmissionTypeEnum transmissionType;
    public GetPaymentsForPayoutV4QueryParams withTransmissionType(GetPaymentsForPayoutV4TransmissionTypeEnum transmissionType) {
        this.transmissionType = transmissionType;
        return this;
    }
}