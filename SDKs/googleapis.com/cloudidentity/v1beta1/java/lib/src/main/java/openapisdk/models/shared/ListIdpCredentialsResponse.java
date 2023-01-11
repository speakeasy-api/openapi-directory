package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListIdpCredentialsResponse
 * Response of the InboundSamlSsoProfilesService.ListIdpCredentials method.
**/
public class ListIdpCredentialsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("idpCredentials")
    public IdpCredential[] idpCredentials;
    public ListIdpCredentialsResponse withIdpCredentials(IdpCredential[] idpCredentials) {
        this.idpCredentials = idpCredentials;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public ListIdpCredentialsResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
}