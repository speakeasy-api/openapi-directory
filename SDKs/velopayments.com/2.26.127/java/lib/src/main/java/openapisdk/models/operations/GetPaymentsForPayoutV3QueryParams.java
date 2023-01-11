package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetPaymentsForPayoutV3QueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Integer page;
    public GetPaymentsForPayoutV3QueryParams withPage(Integer page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=pageSize")
    public Integer pageSize;
    public GetPaymentsForPayoutV3QueryParams withPageSize(Integer pageSize) {
        this.pageSize = pageSize;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=paymentMemo")
    public String paymentMemo;
    public GetPaymentsForPayoutV3QueryParams withPaymentMemo(String paymentMemo) {
        this.paymentMemo = paymentMemo;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=payorPaymentId")
    public String payorPaymentId;
    public GetPaymentsForPayoutV3QueryParams withPayorPaymentId(String payorPaymentId) {
        this.payorPaymentId = payorPaymentId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=remoteId")
    public String remoteId;
    public GetPaymentsForPayoutV3QueryParams withRemoteId(String remoteId) {
        this.remoteId = remoteId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sourceAccountName")
    public String sourceAccountName;
    public GetPaymentsForPayoutV3QueryParams withSourceAccountName(String sourceAccountName) {
        this.sourceAccountName = sourceAccountName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=status")
    public GetPaymentsForPayoutV3StatusEnum status;
    public GetPaymentsForPayoutV3QueryParams withStatus(GetPaymentsForPayoutV3StatusEnum status) {
        this.status = status;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=transmissionType")
    public GetPaymentsForPayoutV3TransmissionTypeEnum transmissionType;
    public GetPaymentsForPayoutV3QueryParams withTransmissionType(GetPaymentsForPayoutV3TransmissionTypeEnum transmissionType) {
        this.transmissionType = transmissionType;
        return this;
    }
}