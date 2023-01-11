package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StartConsentAuthorisationPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=consentId")
    public String consentId;
    public StartConsentAuthorisationPathParams withConsentId(String consentId) {
        this.consentId = consentId;
        return this;
    }
}