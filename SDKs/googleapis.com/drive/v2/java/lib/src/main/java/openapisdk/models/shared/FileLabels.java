package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * FileLabels
 * A group of labels for the file.
**/
public class FileLabels {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hidden")
    public Boolean hidden;
    public FileLabels withHidden(Boolean hidden) {
        this.hidden = hidden;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("modified")
    public Boolean modified;
    public FileLabels withModified(Boolean modified) {
        this.modified = modified;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("restricted")
    public Boolean restricted;
    public FileLabels withRestricted(Boolean restricted) {
        this.restricted = restricted;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("starred")
    public Boolean starred;
    public FileLabels withStarred(Boolean starred) {
        this.starred = starred;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("trashed")
    public Boolean trashed;
    public FileLabels withTrashed(Boolean trashed) {
        this.trashed = trashed;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("viewed")
    public Boolean viewed;
    public FileLabels withViewed(Boolean viewed) {
        this.viewed = viewed;
        return this;
    }
}