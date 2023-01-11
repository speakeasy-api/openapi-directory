package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DataSourceColumnReference
 * An unique identifier that references a data source column.
**/
public class DataSourceColumnReference {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public DataSourceColumnReference withName(String name) {
        this.name = name;
        return this;
    }
}