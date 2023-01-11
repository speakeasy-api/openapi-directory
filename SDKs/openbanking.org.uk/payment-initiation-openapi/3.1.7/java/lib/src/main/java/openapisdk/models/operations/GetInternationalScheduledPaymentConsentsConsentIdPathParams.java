package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetInternationalScheduledPaymentConsentsConsentIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ConsentId")
    public String consentId;
    public GetInternationalScheduledPaymentConsentsConsentIdPathParams withConsentId(String consentId) {
        this.consentId = consentId;
        return this;
    }
}