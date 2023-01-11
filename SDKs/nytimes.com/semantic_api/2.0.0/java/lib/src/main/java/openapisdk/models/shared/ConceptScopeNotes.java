package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ConceptScopeNotes {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("scope_note")
    public String scopeNote;
    public ConceptScopeNotes withScopeNote(String scopeNote) {
        this.scopeNote = scopeNote;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("scope_note_name")
    public String scopeNoteName;
    public ConceptScopeNotes withScopeNoteName(String scopeNoteName) {
        this.scopeNoteName = scopeNoteName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("scope_note_type")
    public String scopeNoteType;
    public ConceptScopeNotes withScopeNoteType(String scopeNoteType) {
        this.scopeNoteType = scopeNoteType;
        return this;
    }
}