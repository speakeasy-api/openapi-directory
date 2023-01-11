package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAccountAccessConsentsConsentIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=consentId")
    public String consentId;
    public GetAccountAccessConsentsConsentIdPathParams withConsentId(String consentId) {
        this.consentId = consentId;
        return this;
    }
}