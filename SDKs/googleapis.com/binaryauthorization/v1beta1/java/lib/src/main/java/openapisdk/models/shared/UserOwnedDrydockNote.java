package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UserOwnedDrydockNote
 * An user owned drydock note references a Drydock ATTESTATION_AUTHORITY Note created by the user.
**/
public class UserOwnedDrydockNote {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("delegationServiceAccountEmail")
    public String delegationServiceAccountEmail;
    public UserOwnedDrydockNote withDelegationServiceAccountEmail(String delegationServiceAccountEmail) {
        this.delegationServiceAccountEmail = delegationServiceAccountEmail;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("noteReference")
    public String noteReference;
    public UserOwnedDrydockNote withNoteReference(String noteReference) {
        this.noteReference = noteReference;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("publicKeys")
    public AttestorPublicKey[] publicKeys;
    public UserOwnedDrydockNote withPublicKeys(AttestorPublicKey[] publicKeys) {
        this.publicKeys = publicKeys;
        return this;
    }
}