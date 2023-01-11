package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Note
 * A proposal may be associated to several notes.
**/
public class Note {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("createTime")
    public String createTime;
    public Note withCreateTime(String createTime) {
        this.createTime = createTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("creatorRole")
    public NoteCreatorRoleEnum creatorRole;
    public Note withCreatorRole(NoteCreatorRoleEnum creatorRole) {
        this.creatorRole = creatorRole;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("note")
    public String note;
    public Note withNote(String note) {
        this.note = note;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("noteId")
    public String noteId;
    public Note withNoteId(String noteId) {
        this.noteId = noteId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("proposalRevision")
    public String proposalRevision;
    public Note withProposalRevision(String proposalRevision) {
        this.proposalRevision = proposalRevision;
        return this;
    }
}