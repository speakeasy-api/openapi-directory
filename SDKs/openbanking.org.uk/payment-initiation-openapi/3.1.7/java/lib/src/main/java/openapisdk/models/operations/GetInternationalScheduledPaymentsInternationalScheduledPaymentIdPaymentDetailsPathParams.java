package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetInternationalScheduledPaymentsInternationalScheduledPaymentIdPaymentDetailsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=InternationalScheduledPaymentId")
    public String internationalScheduledPaymentId;
    public GetInternationalScheduledPaymentsInternationalScheduledPaymentIdPaymentDetailsPathParams withInternationalScheduledPaymentId(String internationalScheduledPaymentId) {
        this.internationalScheduledPaymentId = internationalScheduledPaymentId;
        return this;
    }
}