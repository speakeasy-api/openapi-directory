package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetInternationalScheduledPaymentsInternationalScheduledPaymentIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=InternationalScheduledPaymentId")
    public String internationalScheduledPaymentId;
    public GetInternationalScheduledPaymentsInternationalScheduledPaymentIdPathParams withInternationalScheduledPaymentId(String internationalScheduledPaymentId) {
        this.internationalScheduledPaymentId = internationalScheduledPaymentId;
        return this;
    }
}