package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Replication
 * A policy that defines the replication and encryption configuration of data.
**/
public class Replication {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("automatic")
    public Automatic automatic;
    public Replication withAutomatic(Automatic automatic) {
        this.automatic = automatic;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("userManaged")
    public UserManaged userManaged;
    public Replication withUserManaged(UserManaged userManaged) {
        this.userManaged = userManaged;
        return this;
    }
}