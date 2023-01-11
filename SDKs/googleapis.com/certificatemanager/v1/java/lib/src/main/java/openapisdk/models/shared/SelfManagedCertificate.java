package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SelfManagedCertificate
 * Certificate data for a SelfManaged Certificate. SelfManaged Certificates are uploaded by the user. Updating such certificates before they expire remains the user's responsibility.
**/
public class SelfManagedCertificate {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pemCertificate")
    public String pemCertificate;
    public SelfManagedCertificate withPemCertificate(String pemCertificate) {
        this.pemCertificate = pemCertificate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pemPrivateKey")
    public String pemPrivateKey;
    public SelfManagedCertificate withPemPrivateKey(String pemPrivateKey) {
        this.pemPrivateKey = pemPrivateKey;
        return this;
    }
}