package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ReplicationStatus
 * The replication status of a SecretVersion.
**/
public class ReplicationStatus {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("automatic")
    public AutomaticStatus automatic;
    public ReplicationStatus withAutomatic(AutomaticStatus automatic) {
        this.automatic = automatic;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("userManaged")
    public UserManagedStatus userManaged;
    public ReplicationStatus withUserManaged(UserManagedStatus userManaged) {
        this.userManaged = userManaged;
        return this;
    }
}