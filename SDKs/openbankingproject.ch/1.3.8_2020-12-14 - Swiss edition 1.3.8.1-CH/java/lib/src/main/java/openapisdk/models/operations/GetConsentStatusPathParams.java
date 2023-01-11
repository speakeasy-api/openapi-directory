package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetConsentStatusPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=consentId")
    public String consentId;
    public GetConsentStatusPathParams withConsentId(String consentId) {
        this.consentId = consentId;
        return this;
    }
}