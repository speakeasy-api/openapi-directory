package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * NoteInput
 * A proposal may be associated to several notes.
**/
public class NoteInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("note")
    public String note;
    public NoteInput withNote(String note) {
        this.note = note;
        return this;
    }
}