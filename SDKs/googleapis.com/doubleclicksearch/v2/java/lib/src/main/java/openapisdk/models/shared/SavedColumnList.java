package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SavedColumnList
 * A list of saved columns. Advertisers create saved columns to report on Floodlight activities, Google Analytics goals, or custom KPIs. To request reports with saved columns, you'll need the saved column names that are available from this list.
**/
public class SavedColumnList {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("items")
    public SavedColumn[] items;
    public SavedColumnList withItems(SavedColumn[] items) {
        this.items = items;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public SavedColumnList withKind(String kind) {
        this.kind = kind;
        return this;
    }
}