package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ThirdPartyLinkStatus
 * The third-party link status object contains information about the status of the link.
**/
public class ThirdPartyLinkStatus {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("linkStatus")
    public ThirdPartyLinkStatusLinkStatusEnum linkStatus;
    public ThirdPartyLinkStatus withLinkStatus(ThirdPartyLinkStatusLinkStatusEnum linkStatus) {
        this.linkStatus = linkStatus;
        return this;
    }
}