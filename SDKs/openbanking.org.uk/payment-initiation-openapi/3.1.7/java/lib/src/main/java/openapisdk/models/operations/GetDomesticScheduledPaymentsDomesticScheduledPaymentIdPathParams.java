package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDomesticScheduledPaymentsDomesticScheduledPaymentIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=DomesticScheduledPaymentId")
    public String domesticScheduledPaymentId;
    public GetDomesticScheduledPaymentsDomesticScheduledPaymentIdPathParams withDomesticScheduledPaymentId(String domesticScheduledPaymentId) {
        this.domesticScheduledPaymentId = domesticScheduledPaymentId;
        return this;
    }
}