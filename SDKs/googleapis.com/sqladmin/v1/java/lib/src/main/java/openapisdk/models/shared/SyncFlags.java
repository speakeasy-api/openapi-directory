package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SyncFlags
 * Initial sync flags for certain Cloud SQL APIs. Currently used for the MySQL external server initial dump.
**/
public class SyncFlags {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public SyncFlags withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("value")
    public String value;
    public SyncFlags withValue(String value) {
        this.value = value;
        return this;
    }
}