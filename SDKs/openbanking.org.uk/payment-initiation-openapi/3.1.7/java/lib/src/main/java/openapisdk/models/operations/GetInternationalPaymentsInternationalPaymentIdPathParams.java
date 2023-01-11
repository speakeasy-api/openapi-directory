package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetInternationalPaymentsInternationalPaymentIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=InternationalPaymentId")
    public String internationalPaymentId;
    public GetInternationalPaymentsInternationalPaymentIdPathParams withInternationalPaymentId(String internationalPaymentId) {
        this.internationalPaymentId = internationalPaymentId;
        return this;
    }
}