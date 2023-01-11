package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AttestorInput
 * An attestor that attests to container image artifacts. An existing attestor cannot be modified except where indicated.
**/
public class AttestorInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public AttestorInput withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("etag")
    public String etag;
    public AttestorInput withEtag(String etag) {
        this.etag = etag;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public AttestorInput withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("userOwnedDrydockNote")
    public UserOwnedDrydockNoteInput userOwnedDrydockNote;
    public AttestorInput withUserOwnedDrydockNote(UserOwnedDrydockNoteInput userOwnedDrydockNote) {
        this.userOwnedDrydockNote = userOwnedDrydockNote;
        return this;
    }
}