package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DisplayvideoFirstAndThirdPartyAudiencesEditCustomerMatchMembersPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=firstAndThirdPartyAudienceId")
    public String firstAndThirdPartyAudienceId;
    public DisplayvideoFirstAndThirdPartyAudiencesEditCustomerMatchMembersPathParams withFirstAndThirdPartyAudienceId(String firstAndThirdPartyAudienceId) {
        this.firstAndThirdPartyAudienceId = firstAndThirdPartyAudienceId;
        return this;
    }
}