package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * FileShortcutDetails
 * Shortcut file details. Only populated for shortcut files, which have the mimeType field set to application/vnd.google-apps.shortcut.
**/
public class FileShortcutDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("targetId")
    public String targetId;
    public FileShortcutDetails withTargetId(String targetId) {
        this.targetId = targetId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("targetMimeType")
    public String targetMimeType;
    public FileShortcutDetails withTargetMimeType(String targetMimeType) {
        this.targetMimeType = targetMimeType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("targetResourceKey")
    public String targetResourceKey;
    public FileShortcutDetails withTargetResourceKey(String targetResourceKey) {
        this.targetResourceKey = targetResourceKey;
        return this;
    }
}