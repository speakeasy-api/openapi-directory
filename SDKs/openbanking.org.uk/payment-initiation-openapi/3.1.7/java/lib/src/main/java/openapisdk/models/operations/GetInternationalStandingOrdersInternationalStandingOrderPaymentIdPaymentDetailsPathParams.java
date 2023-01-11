package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetInternationalStandingOrdersInternationalStandingOrderPaymentIdPaymentDetailsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=InternationalStandingOrderPaymentId")
    public String internationalStandingOrderPaymentId;
    public GetInternationalStandingOrdersInternationalStandingOrderPaymentIdPaymentDetailsPathParams withInternationalStandingOrderPaymentId(String internationalStandingOrderPaymentId) {
        this.internationalStandingOrderPaymentId = internationalStandingOrderPaymentId;
        return this;
    }
}