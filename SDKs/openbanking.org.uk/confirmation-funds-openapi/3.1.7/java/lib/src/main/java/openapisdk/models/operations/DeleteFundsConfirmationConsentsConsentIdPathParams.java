package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteFundsConfirmationConsentsConsentIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ConsentId")
    public String consentId;
    public DeleteFundsConfirmationConsentsConsentIdPathParams withConsentId(String consentId) {
        this.consentId = consentId;
        return this;
    }
}