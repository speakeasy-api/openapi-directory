package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DatabaseFlags
 * Database flags for Cloud SQL instances.
**/
public class DatabaseFlags {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public DatabaseFlags withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("value")
    public String value;
    public DatabaseFlags withValue(String value) {
        this.value = value;
        return this;
    }
}