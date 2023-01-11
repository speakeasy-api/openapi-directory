package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListInboundSamlSsoProfilesResponse
 * Response of the InboundSamlSsoProfilesService.ListInboundSamlSsoProfiles method.
**/
public class ListInboundSamlSsoProfilesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("inboundSamlSsoProfiles")
    public InboundSamlSsoProfile[] inboundSamlSsoProfiles;
    public ListInboundSamlSsoProfilesResponse withInboundSamlSsoProfiles(InboundSamlSsoProfile[] inboundSamlSsoProfiles) {
        this.inboundSamlSsoProfiles = inboundSamlSsoProfiles;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public ListInboundSamlSsoProfilesResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
}