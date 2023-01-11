package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AddNoteRequestInput
 * Request message for adding a note to a given proposal.
**/
public class AddNoteRequestInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("note")
    public NoteInput note;
    public AddNoteRequestInput withNote(NoteInput note) {
        this.note = note;
        return this;
    }
}