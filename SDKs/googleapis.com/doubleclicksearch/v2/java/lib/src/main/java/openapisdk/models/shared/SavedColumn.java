package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SavedColumn
 * A saved column
**/
public class SavedColumn {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public SavedColumn withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("savedColumnName")
    public String savedColumnName;
    public SavedColumn withSavedColumnName(String savedColumnName) {
        this.savedColumnName = savedColumnName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;
    public SavedColumn withType(String type) {
        this.type = type;
        return this;
    }
}