package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateConsentsPsuDataPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=authorisationId")
    public String authorisationId;
    public UpdateConsentsPsuDataPathParams withAuthorisationId(String authorisationId) {
        this.authorisationId = authorisationId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=consentId")
    public String consentId;
    public UpdateConsentsPsuDataPathParams withConsentId(String consentId) {
        this.consentId = consentId;
        return this;
    }
}