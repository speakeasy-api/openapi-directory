package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ClientCredentialsResponse
 * The Client Credentials Response Model
**/
public class ClientCredentialsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clientSecret")
    public String clientSecret;
    public ClientCredentialsResponse withClientSecret(String clientSecret) {
        this.clientSecret = clientSecret;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clientSecretExpirationDate")
    public String clientSecretExpirationDate;
    public ClientCredentialsResponse withClientSecretExpirationDate(String clientSecretExpirationDate) {
        this.clientSecretExpirationDate = clientSecretExpirationDate;
        return this;
    }
}