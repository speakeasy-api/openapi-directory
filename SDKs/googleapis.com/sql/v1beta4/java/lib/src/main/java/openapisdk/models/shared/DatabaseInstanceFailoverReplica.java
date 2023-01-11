package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DatabaseInstanceFailoverReplica
 * The name and status of the failover replica.
**/
public class DatabaseInstanceFailoverReplica {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("available")
    public Boolean available;
    public DatabaseInstanceFailoverReplica withAvailable(Boolean available) {
        this.available = available;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public DatabaseInstanceFailoverReplica withName(String name) {
        this.name = name;
        return this;
    }
}