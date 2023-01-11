package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetConsentScaStatusPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=authorisationId")
    public String authorisationId;
    public GetConsentScaStatusPathParams withAuthorisationId(String authorisationId) {
        this.authorisationId = authorisationId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=consentId")
    public String consentId;
    public GetConsentScaStatusPathParams withConsentId(String consentId) {
        this.consentId = consentId;
        return this;
    }
}