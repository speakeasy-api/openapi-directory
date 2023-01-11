package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ThirdPartyJobInstructionThirdPartyJobInstructionEmployer
 * The third party job instructions' employer
**/
public class ThirdPartyJobInstructionThirdPartyJobInstructionEmployer {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("@href")
    public String atHref;
    public ThirdPartyJobInstructionThirdPartyJobInstructionEmployer withAtHref(String atHref) {
        this.atHref = atHref;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("@rel")
    public String atRel;
    public ThirdPartyJobInstructionThirdPartyJobInstructionEmployer withAtRel(String atRel) {
        this.atRel = atRel;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("@title")
    public String atTitle;
    public ThirdPartyJobInstructionThirdPartyJobInstructionEmployer withAtTitle(String atTitle) {
        this.atTitle = atTitle;
        return this;
    }
}