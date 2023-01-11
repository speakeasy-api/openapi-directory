package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetConsentAuthorisationPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=consentId")
    public String consentId;
    public GetConsentAuthorisationPathParams withConsentId(String consentId) {
        this.consentId = consentId;
        return this;
    }
}