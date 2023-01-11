package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDomesticPaymentConsentsConsentIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ConsentId")
    public String consentId;
    public GetDomesticPaymentConsentsConsentIdPathParams withConsentId(String consentId) {
        this.consentId = consentId;
        return this;
    }
}