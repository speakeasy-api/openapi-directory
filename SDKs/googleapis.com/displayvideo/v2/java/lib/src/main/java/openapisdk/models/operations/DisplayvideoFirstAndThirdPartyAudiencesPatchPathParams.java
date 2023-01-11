package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DisplayvideoFirstAndThirdPartyAudiencesPatchPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=firstAndThirdPartyAudienceId")
    public String firstAndThirdPartyAudienceId;
    public DisplayvideoFirstAndThirdPartyAudiencesPatchPathParams withFirstAndThirdPartyAudienceId(String firstAndThirdPartyAudienceId) {
        this.firstAndThirdPartyAudienceId = firstAndThirdPartyAudienceId;
        return this;
    }
}