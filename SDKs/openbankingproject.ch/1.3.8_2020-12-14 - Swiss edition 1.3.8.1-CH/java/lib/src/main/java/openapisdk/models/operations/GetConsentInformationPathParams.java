package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetConsentInformationPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=consentId")
    public String consentId;
    public GetConsentInformationPathParams withConsentId(String consentId) {
        this.consentId = consentId;
        return this;
    }
}