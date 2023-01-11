package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * RegistryCredential
 * A server-stored registry credential used to validate device credentials.
**/
public class RegistryCredential {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("publicKeyCertificate")
    public PublicKeyCertificate publicKeyCertificate;
    public RegistryCredential withPublicKeyCertificate(PublicKeyCertificate publicKeyCertificate) {
        this.publicKeyCertificate = publicKeyCertificate;
        return this;
    }
}