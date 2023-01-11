package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DataSourceObjectReferences
 * A list of references to data source objects.
**/
public class DataSourceObjectReferences {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("references")
    public DataSourceObjectReference[] references;
    public DataSourceObjectReferences withReferences(DataSourceObjectReference[] references) {
        this.references = references;
        return this;
    }
}