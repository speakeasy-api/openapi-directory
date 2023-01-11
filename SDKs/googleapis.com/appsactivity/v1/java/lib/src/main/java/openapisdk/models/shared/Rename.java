package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Rename
 * Contains information about a renametype event.
**/
public class Rename {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("newTitle")
    public String newTitle;
    public Rename withNewTitle(String newTitle) {
        this.newTitle = newTitle;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("oldTitle")
    public String oldTitle;
    public Rename withOldTitle(String oldTitle) {
        this.oldTitle = oldTitle;
        return this;
    }
}