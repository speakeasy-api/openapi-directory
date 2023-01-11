package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UserOwnedGrafeasNote
 * An user owned Grafeas note references a Grafeas Attestation.Authority Note created by the user.
**/
public class UserOwnedGrafeasNote {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("delegationServiceAccountEmail")
    public String delegationServiceAccountEmail;
    public UserOwnedGrafeasNote withDelegationServiceAccountEmail(String delegationServiceAccountEmail) {
        this.delegationServiceAccountEmail = delegationServiceAccountEmail;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("noteReference")
    public String noteReference;
    public UserOwnedGrafeasNote withNoteReference(String noteReference) {
        this.noteReference = noteReference;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("publicKeys")
    public AttestorPublicKey[] publicKeys;
    public UserOwnedGrafeasNote withPublicKeys(AttestorPublicKey[] publicKeys) {
        this.publicKeys = publicKeys;
        return this;
    }
}