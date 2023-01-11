package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AttestationOccurrence
 * Occurrence that represents a single "attestation". The authenticity of an attestation can be verified using the attached signature. If the verifier trusts the public key of the signer, then verifying the signature is sufficient to establish trust. In this circumstance, the authority to which this attestation is attached is primarily useful for lookup (how to find this attestation if you already know the authority and artifact to be verified) and intent (for which authority this attestation was intended to sign.
**/
public class AttestationOccurrence {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("jwts")
    public Jwt[] jwts;
    public AttestationOccurrence withJwts(Jwt[] jwts) {
        this.jwts = jwts;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("serializedPayload")
    public String serializedPayload;
    public AttestationOccurrence withSerializedPayload(String serializedPayload) {
        this.serializedPayload = serializedPayload;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("signatures")
    public Signature[] signatures;
    public AttestationOccurrence withSignatures(Signature[] signatures) {
        this.signatures = signatures;
        return this;
    }
}