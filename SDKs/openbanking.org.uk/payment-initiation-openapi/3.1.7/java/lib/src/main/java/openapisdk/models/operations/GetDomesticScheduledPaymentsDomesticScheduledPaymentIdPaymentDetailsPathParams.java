package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDomesticScheduledPaymentsDomesticScheduledPaymentIdPaymentDetailsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=DomesticScheduledPaymentId")
    public String domesticScheduledPaymentId;
    public GetDomesticScheduledPaymentsDomesticScheduledPaymentIdPaymentDetailsPathParams withDomesticScheduledPaymentId(String domesticScheduledPaymentId) {
        this.domesticScheduledPaymentId = domesticScheduledPaymentId;
        return this;
    }
}