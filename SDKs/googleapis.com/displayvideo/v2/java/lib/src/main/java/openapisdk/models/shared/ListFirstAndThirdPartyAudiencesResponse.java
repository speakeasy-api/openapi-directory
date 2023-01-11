package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListFirstAndThirdPartyAudiencesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("firstAndThirdPartyAudiences")
    public FirstAndThirdPartyAudience[] firstAndThirdPartyAudiences;
    public ListFirstAndThirdPartyAudiencesResponse withFirstAndThirdPartyAudiences(FirstAndThirdPartyAudience[] firstAndThirdPartyAudiences) {
        this.firstAndThirdPartyAudiences = firstAndThirdPartyAudiences;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public ListFirstAndThirdPartyAudiencesResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
}