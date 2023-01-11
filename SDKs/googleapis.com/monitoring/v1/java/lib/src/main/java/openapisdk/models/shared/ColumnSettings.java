package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ColumnSettings
 * The persistent settings for a table's columns.
**/
public class ColumnSettings {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("column")
    public String column;
    public ColumnSettings withColumn(String column) {
        this.column = column;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("visible")
    public Boolean visible;
    public ColumnSettings withVisible(Boolean visible) {
        this.visible = visible;
        return this;
    }
}