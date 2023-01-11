package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UserOwnedGrafeasNoteInput
 * An user owned Grafeas note references a Grafeas Attestation.Authority Note created by the user.
**/
public class UserOwnedGrafeasNoteInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("noteReference")
    public String noteReference;
    public UserOwnedGrafeasNoteInput withNoteReference(String noteReference) {
        this.noteReference = noteReference;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("publicKeys")
    public AttestorPublicKey[] publicKeys;
    public UserOwnedGrafeasNoteInput withPublicKeys(AttestorPublicKey[] publicKeys) {
        this.publicKeys = publicKeys;
        return this;
    }
}