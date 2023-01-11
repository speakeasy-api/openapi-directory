package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * EditCustomerMatchMembersResponse
 * The response of FirstAndThirdPartyAudienceService.EditCustomerMatchMembers.
**/
public class EditCustomerMatchMembersResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("firstAndThirdPartyAudienceId")
    public String firstAndThirdPartyAudienceId;
    public EditCustomerMatchMembersResponse withFirstAndThirdPartyAudienceId(String firstAndThirdPartyAudienceId) {
        this.firstAndThirdPartyAudienceId = firstAndThirdPartyAudienceId;
        return this;
    }
}