package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Usersettings {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public Usersettings withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("notesExport")
    public UsersettingsNotesExport notesExport;
    public Usersettings withNotesExport(UsersettingsNotesExport notesExport) {
        this.notesExport = notesExport;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("notification")
    public UsersettingsNotification notification;
    public Usersettings withNotification(UsersettingsNotification notification) {
        this.notification = notification;
        return this;
    }
}