package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetFilePaymentConsentsConsentIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ConsentId")
    public String consentId;
    public GetFilePaymentConsentsConsentIdPathParams withConsentId(String consentId) {
        this.consentId = consentId;
        return this;
    }
}