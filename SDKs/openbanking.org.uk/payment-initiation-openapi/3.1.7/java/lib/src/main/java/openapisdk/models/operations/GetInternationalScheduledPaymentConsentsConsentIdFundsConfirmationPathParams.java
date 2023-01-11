package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetInternationalScheduledPaymentConsentsConsentIdFundsConfirmationPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ConsentId")
    public String consentId;
    public GetInternationalScheduledPaymentConsentsConsentIdFundsConfirmationPathParams withConsentId(String consentId) {
        this.consentId = consentId;
        return this;
    }
}