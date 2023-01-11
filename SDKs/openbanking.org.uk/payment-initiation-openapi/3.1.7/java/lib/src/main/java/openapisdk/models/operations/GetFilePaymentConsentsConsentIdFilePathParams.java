package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetFilePaymentConsentsConsentIdFilePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ConsentId")
    public String consentId;
    public GetFilePaymentConsentsConsentIdFilePathParams withConsentId(String consentId) {
        this.consentId = consentId;
        return this;
    }
}