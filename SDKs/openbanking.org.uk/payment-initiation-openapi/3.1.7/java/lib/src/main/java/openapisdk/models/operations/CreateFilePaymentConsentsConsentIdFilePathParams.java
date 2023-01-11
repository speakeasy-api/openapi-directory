package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateFilePaymentConsentsConsentIdFilePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ConsentId")
    public String consentId;
    public CreateFilePaymentConsentsConsentIdFilePathParams withConsentId(String consentId) {
        this.consentId = consentId;
        return this;
    }
}