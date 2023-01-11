package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdatePaymentPsuDataPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=authorisationId")
    public String authorisationId;
    public UpdatePaymentPsuDataPathParams withAuthorisationId(String authorisationId) {
        this.authorisationId = authorisationId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=payment-product")
    public openapisdk.models.shared.PaymentProductEnum paymentProduct;
    public UpdatePaymentPsuDataPathParams withPaymentProduct(openapisdk.models.shared.PaymentProductEnum paymentProduct) {
        this.paymentProduct = paymentProduct;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=payment-service")
    public openapisdk.models.shared.PaymentServiceEnum paymentService;
    public UpdatePaymentPsuDataPathParams withPaymentService(openapisdk.models.shared.PaymentServiceEnum paymentService) {
        this.paymentService = paymentService;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=paymentId")
    public String paymentId;
    public UpdatePaymentPsuDataPathParams withPaymentId(String paymentId) {
        this.paymentId = paymentId;
        return this;
    }
}