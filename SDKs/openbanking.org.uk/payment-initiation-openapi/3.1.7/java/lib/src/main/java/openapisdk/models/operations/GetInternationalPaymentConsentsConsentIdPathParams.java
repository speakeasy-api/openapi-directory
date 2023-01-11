package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetInternationalPaymentConsentsConsentIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ConsentId")
    public String consentId;
    public GetInternationalPaymentConsentsConsentIdPathParams withConsentId(String consentId) {
        this.consentId = consentId;
        return this;
    }
}