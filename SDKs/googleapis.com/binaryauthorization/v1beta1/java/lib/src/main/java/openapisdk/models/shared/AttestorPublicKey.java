package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AttestorPublicKey
 * An attestor public key that will be used to verify attestations signed by this attestor.
**/
public class AttestorPublicKey {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("asciiArmoredPgpPublicKey")
    public String asciiArmoredPgpPublicKey;
    public AttestorPublicKey withAsciiArmoredPgpPublicKey(String asciiArmoredPgpPublicKey) {
        this.asciiArmoredPgpPublicKey = asciiArmoredPgpPublicKey;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("comment")
    public String comment;
    public AttestorPublicKey withComment(String comment) {
        this.comment = comment;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public AttestorPublicKey withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pkixPublicKey")
    public PkixPublicKey pkixPublicKey;
    public AttestorPublicKey withPkixPublicKey(PkixPublicKey pkixPublicKey) {
        this.pkixPublicKey = pkixPublicKey;
        return this;
    }
}