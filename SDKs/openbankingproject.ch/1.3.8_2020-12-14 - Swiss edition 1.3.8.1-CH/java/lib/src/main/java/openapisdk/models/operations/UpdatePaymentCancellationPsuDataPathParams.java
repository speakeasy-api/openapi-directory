package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdatePaymentCancellationPsuDataPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=authorisationId")
    public String authorisationId;
    public UpdatePaymentCancellationPsuDataPathParams withAuthorisationId(String authorisationId) {
        this.authorisationId = authorisationId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=payment-product")
    public openapisdk.models.shared.PaymentProductEnum paymentProduct;
    public UpdatePaymentCancellationPsuDataPathParams withPaymentProduct(openapisdk.models.shared.PaymentProductEnum paymentProduct) {
        this.paymentProduct = paymentProduct;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=payment-service")
    public openapisdk.models.shared.PaymentServiceEnum paymentService;
    public UpdatePaymentCancellationPsuDataPathParams withPaymentService(openapisdk.models.shared.PaymentServiceEnum paymentService) {
        this.paymentService = paymentService;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=paymentId")
    public String paymentId;
    public UpdatePaymentCancellationPsuDataPathParams withPaymentId(String paymentId) {
        this.paymentId = paymentId;
        return this;
    }
}