package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Note
 * A text note attached to the proposal to facilitate the communication between buyers and sellers.
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
}