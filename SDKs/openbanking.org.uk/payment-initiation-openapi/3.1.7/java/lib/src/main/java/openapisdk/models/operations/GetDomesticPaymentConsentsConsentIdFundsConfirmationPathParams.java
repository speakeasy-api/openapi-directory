package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDomesticPaymentConsentsConsentIdFundsConfirmationPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ConsentId")
    public String consentId;
    public GetDomesticPaymentConsentsConsentIdFundsConfirmationPathParams withConsentId(String consentId) {
        this.consentId = consentId;
        return this;
    }
}