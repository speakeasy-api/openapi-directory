package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetInternationalPaymentConsentsConsentIdFundsConfirmationPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ConsentId")
    public String consentId;
    public GetInternationalPaymentConsentsConsentIdFundsConfirmationPathParams withConsentId(String consentId) {
        this.consentId = consentId;
        return this;
    }
}