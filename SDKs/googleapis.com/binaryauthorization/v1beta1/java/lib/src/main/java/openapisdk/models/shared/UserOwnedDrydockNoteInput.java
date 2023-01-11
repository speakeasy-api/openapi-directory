package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UserOwnedDrydockNoteInput
 * An user owned drydock note references a Drydock ATTESTATION_AUTHORITY Note created by the user.
**/
public class UserOwnedDrydockNoteInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("noteReference")
    public String noteReference;
    public UserOwnedDrydockNoteInput withNoteReference(String noteReference) {
        this.noteReference = noteReference;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("publicKeys")
    public AttestorPublicKey[] publicKeys;
    public UserOwnedDrydockNoteInput withPublicKeys(AttestorPublicKey[] publicKeys) {
        this.publicKeys = publicKeys;
        return this;
    }
}