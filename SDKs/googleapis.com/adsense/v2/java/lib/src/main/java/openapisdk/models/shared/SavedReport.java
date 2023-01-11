package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SavedReport
 * Representation of a saved report.
**/
public class SavedReport {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public SavedReport withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("title")
    public String title;
    public SavedReport withTitle(String title) {
        this.title = title;
        return this;
    }
}