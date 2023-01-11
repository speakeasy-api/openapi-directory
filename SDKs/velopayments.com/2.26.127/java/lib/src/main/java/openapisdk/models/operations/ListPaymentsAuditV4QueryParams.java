package openapisdk.models.operations;

import java.time.LocalDate;
import openapisdk.utils.SpeakeasyMetadata;

public class ListPaymentsAuditV4QueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Integer page;
    public ListPaymentsAuditV4QueryParams withPage(Integer page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=pageSize")
    public Integer pageSize;
    public ListPaymentsAuditV4QueryParams withPageSize(Integer pageSize) {
        this.pageSize = pageSize;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=payeeId")
    public String payeeId;
    public ListPaymentsAuditV4QueryParams withPayeeId(String payeeId) {
        this.payeeId = payeeId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=paymentAmountFrom")
    public Integer paymentAmountFrom;
    public ListPaymentsAuditV4QueryParams withPaymentAmountFrom(Integer paymentAmountFrom) {
        this.paymentAmountFrom = paymentAmountFrom;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=paymentAmountTo")
    public Integer paymentAmountTo;
    public ListPaymentsAuditV4QueryParams withPaymentAmountTo(Integer paymentAmountTo) {
        this.paymentAmountTo = paymentAmountTo;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=paymentCurrency")
    public String paymentCurrency;
    public ListPaymentsAuditV4QueryParams withPaymentCurrency(String paymentCurrency) {
        this.paymentCurrency = paymentCurrency;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=paymentMemo")
    public String paymentMemo;
    public ListPaymentsAuditV4QueryParams withPaymentMemo(String paymentMemo) {
        this.paymentMemo = paymentMemo;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=payorId")
    public String payorId;
    public ListPaymentsAuditV4QueryParams withPayorId(String payorId) {
        this.payorId = payorId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=payorName")
    public String payorName;
    public ListPaymentsAuditV4QueryParams withPayorName(String payorName) {
        this.payorName = payorName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=remoteId")
    public String remoteId;
    public ListPaymentsAuditV4QueryParams withRemoteId(String remoteId) {
        this.remoteId = remoteId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=remoteSystemId")
    public String remoteSystemId;
    public ListPaymentsAuditV4QueryParams withRemoteSystemId(String remoteSystemId) {
        this.remoteSystemId = remoteSystemId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sensitive")
    public Boolean sensitive;
    public ListPaymentsAuditV4QueryParams withSensitive(Boolean sensitive) {
        this.sensitive = sensitive;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort")
    public String sort;
    public ListPaymentsAuditV4QueryParams withSort(String sort) {
        this.sort = sort;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sourceAccountName")
    public String sourceAccountName;
    public ListPaymentsAuditV4QueryParams withSourceAccountName(String sourceAccountName) {
        this.sourceAccountName = sourceAccountName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sourceAmountFrom")
    public Integer sourceAmountFrom;
    public ListPaymentsAuditV4QueryParams withSourceAmountFrom(Integer sourceAmountFrom) {
        this.sourceAmountFrom = sourceAmountFrom;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sourceAmountTo")
    public Integer sourceAmountTo;
    public ListPaymentsAuditV4QueryParams withSourceAmountTo(Integer sourceAmountTo) {
        this.sourceAmountTo = sourceAmountTo;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sourceCurrency")
    public String sourceCurrency;
    public ListPaymentsAuditV4QueryParams withSourceCurrency(String sourceCurrency) {
        this.sourceCurrency = sourceCurrency;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=status")
    public ListPaymentsAuditV4StatusEnum status;
    public ListPaymentsAuditV4QueryParams withStatus(ListPaymentsAuditV4StatusEnum status) {
        this.status = status;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=submittedDateFrom")
    public LocalDate submittedDateFrom;
    public ListPaymentsAuditV4QueryParams withSubmittedDateFrom(LocalDate submittedDateFrom) {
        this.submittedDateFrom = submittedDateFrom;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=submittedDateTo")
    public LocalDate submittedDateTo;
    public ListPaymentsAuditV4QueryParams withSubmittedDateTo(LocalDate submittedDateTo) {
        this.submittedDateTo = submittedDateTo;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=transmissionType")
    public ListPaymentsAuditV4TransmissionTypeEnum transmissionType;
    public ListPaymentsAuditV4QueryParams withTransmissionType(ListPaymentsAuditV4TransmissionTypeEnum transmissionType) {
        this.transmissionType = transmissionType;
        return this;
    }
}