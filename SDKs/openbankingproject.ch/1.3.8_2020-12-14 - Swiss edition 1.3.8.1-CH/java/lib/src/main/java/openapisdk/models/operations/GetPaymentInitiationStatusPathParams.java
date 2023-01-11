package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetPaymentInitiationStatusPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=payment-product")
    public openapisdk.models.shared.PaymentProductEnum paymentProduct;
    public GetPaymentInitiationStatusPathParams withPaymentProduct(openapisdk.models.shared.PaymentProductEnum paymentProduct) {
        this.paymentProduct = paymentProduct;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=payment-service")
    public openapisdk.models.shared.PaymentServiceEnum paymentService;
    public GetPaymentInitiationStatusPathParams withPaymentService(openapisdk.models.shared.PaymentServiceEnum paymentService) {
        this.paymentService = paymentService;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=paymentId")
    public String paymentId;
    public GetPaymentInitiationStatusPathParams withPaymentId(String paymentId) {
        this.paymentId = paymentId;
        return this;
    }
}