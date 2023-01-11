package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetInternationalStandingOrdersInternationalStandingOrderPaymentIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=InternationalStandingOrderPaymentId")
    public String internationalStandingOrderPaymentId;
    public GetInternationalStandingOrdersInternationalStandingOrderPaymentIdPathParams withInternationalStandingOrderPaymentId(String internationalStandingOrderPaymentId) {
        this.internationalStandingOrderPaymentId = internationalStandingOrderPaymentId;
        return this;
    }
}