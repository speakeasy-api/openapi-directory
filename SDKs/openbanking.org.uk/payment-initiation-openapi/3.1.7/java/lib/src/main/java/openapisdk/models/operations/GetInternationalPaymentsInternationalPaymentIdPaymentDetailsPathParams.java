package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetInternationalPaymentsInternationalPaymentIdPaymentDetailsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=InternationalPaymentId")
    public String internationalPaymentId;
    public GetInternationalPaymentsInternationalPaymentIdPaymentDetailsPathParams withInternationalPaymentId(String internationalPaymentId) {
        this.internationalPaymentId = internationalPaymentId;
        return this;
    }
}