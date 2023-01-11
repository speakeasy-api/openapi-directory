package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class EntryInfoProperty {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public EntryInfoProperty withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sortable")
    public Boolean sortable;
    public EntryInfoProperty withSortable(Boolean sortable) {
        this.sortable = sortable;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public java.util.Map<String, Object> type;
    public EntryInfoProperty withType(java.util.Map<String, Object> type) {
        this.type = type;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("unit")
    public String unit;
    public EntryInfoProperty withUnit(String unit) {
        this.unit = unit;
        return this;
    }
}