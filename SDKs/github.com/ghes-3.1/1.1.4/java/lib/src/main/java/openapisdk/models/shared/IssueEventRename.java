package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * IssueEventRename
 * Issue Event Rename
**/
public class IssueEventRename {
    @JsonProperty("from")
    public String from;
    public IssueEventRename withFrom(String from) {
        this.from = from;
        return this;
    }
    @JsonProperty("to")
    public String to;
    public IssueEventRename withTo(String to) {
        this.to = to;
        return this;
    }
}