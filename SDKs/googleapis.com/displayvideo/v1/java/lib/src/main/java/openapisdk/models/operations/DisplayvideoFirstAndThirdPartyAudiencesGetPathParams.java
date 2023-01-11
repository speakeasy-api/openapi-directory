package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DisplayvideoFirstAndThirdPartyAudiencesGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=firstAndThirdPartyAudienceId")
    public String firstAndThirdPartyAudienceId;
    public DisplayvideoFirstAndThirdPartyAudiencesGetPathParams withFirstAndThirdPartyAudienceId(String firstAndThirdPartyAudienceId) {
        this.firstAndThirdPartyAudienceId = firstAndThirdPartyAudienceId;
        return this;
    }
}