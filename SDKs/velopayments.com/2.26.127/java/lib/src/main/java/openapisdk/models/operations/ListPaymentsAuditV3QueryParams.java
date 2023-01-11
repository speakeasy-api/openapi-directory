package openapisdk.models.operations;

import java.time.LocalDate;
import openapisdk.utils.SpeakeasyMetadata;

public class ListPaymentsAuditV3QueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Integer page;
    public ListPaymentsAuditV3QueryParams withPage(Integer page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=pageSize")
    public Integer pageSize;
    public ListPaymentsAuditV3QueryParams withPageSize(Integer pageSize) {
        this.pageSize = pageSize;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=payeeId")
    public String payeeId;
    public ListPaymentsAuditV3QueryParams withPayeeId(String payeeId) {
        this.payeeId = payeeId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=paymentAmountFrom")
    public Integer paymentAmountFrom;
    public ListPaymentsAuditV3QueryParams withPaymentAmountFrom(Integer paymentAmountFrom) {
        this.paymentAmountFrom = paymentAmountFrom;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=paymentAmountTo")
    public Integer paymentAmountTo;
    public ListPaymentsAuditV3QueryParams withPaymentAmountTo(Integer paymentAmountTo) {
        this.paymentAmountTo = paymentAmountTo;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=paymentCurrency")
    public String paymentCurrency;
    public ListPaymentsAuditV3QueryParams withPaymentCurrency(String paymentCurrency) {
        this.paymentCurrency = paymentCurrency;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=paymentMemo")
    public String paymentMemo;
    public ListPaymentsAuditV3QueryParams withPaymentMemo(String paymentMemo) {
        this.paymentMemo = paymentMemo;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=payorId")
    public String payorId;
    public ListPaymentsAuditV3QueryParams withPayorId(String payorId) {
        this.payorId = payorId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=payorName")
    public String payorName;
    public ListPaymentsAuditV3QueryParams withPayorName(String payorName) {
        this.payorName = payorName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=remoteId")
    public String remoteId;
    public ListPaymentsAuditV3QueryParams withRemoteId(String remoteId) {
        this.remoteId = remoteId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sensitive")
    public Boolean sensitive;
    public ListPaymentsAuditV3QueryParams withSensitive(Boolean sensitive) {
        this.sensitive = sensitive;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort")
    public String sort;
    public ListPaymentsAuditV3QueryParams withSort(String sort) {
        this.sort = sort;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sourceAccountName")
    public String sourceAccountName;
    public ListPaymentsAuditV3QueryParams withSourceAccountName(String sourceAccountName) {
        this.sourceAccountName = sourceAccountName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sourceAmountFrom")
    public Integer sourceAmountFrom;
    public ListPaymentsAuditV3QueryParams withSourceAmountFrom(Integer sourceAmountFrom) {
        this.sourceAmountFrom = sourceAmountFrom;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sourceAmountTo")
    public Integer sourceAmountTo;
    public ListPaymentsAuditV3QueryParams withSourceAmountTo(Integer sourceAmountTo) {
        this.sourceAmountTo = sourceAmountTo;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sourceCurrency")
    public String sourceCurrency;
    public ListPaymentsAuditV3QueryParams withSourceCurrency(String sourceCurrency) {
        this.sourceCurrency = sourceCurrency;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=status")
    public ListPaymentsAuditV3StatusEnum status;
    public ListPaymentsAuditV3QueryParams withStatus(ListPaymentsAuditV3StatusEnum status) {
        this.status = status;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=submittedDateFrom")
    public LocalDate submittedDateFrom;
    public ListPaymentsAuditV3QueryParams withSubmittedDateFrom(LocalDate submittedDateFrom) {
        this.submittedDateFrom = submittedDateFrom;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=submittedDateTo")
    public LocalDate submittedDateTo;
    public ListPaymentsAuditV3QueryParams withSubmittedDateTo(LocalDate submittedDateTo) {
        this.submittedDateTo = submittedDateTo;
        return this;
    }
}