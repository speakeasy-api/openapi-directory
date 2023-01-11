package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ChangeList
 * A list of changes for a user.
**/
public class ChangeList {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("changes")
    public Change[] changes;
    public ChangeList withChanges(Change[] changes) {
        this.changes = changes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public ChangeList withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("newStartPageToken")
    public String newStartPageToken;
    public ChangeList withNewStartPageToken(String newStartPageToken) {
        this.newStartPageToken = newStartPageToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public ChangeList withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
}