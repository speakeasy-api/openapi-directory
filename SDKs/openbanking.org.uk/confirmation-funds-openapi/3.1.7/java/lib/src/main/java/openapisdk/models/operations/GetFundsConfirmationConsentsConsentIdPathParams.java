package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetFundsConfirmationConsentsConsentIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ConsentId")
    public String consentId;
    public GetFundsConfirmationConsentsConsentIdPathParams withConsentId(String consentId) {
        this.consentId = consentId;
        return this;
    }
}