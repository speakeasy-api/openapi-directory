package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UserManaged
 * A replication policy that replicates the Secret payload into the locations specified in Secret.replication.user_managed.replicas
**/
public class UserManaged {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("replicas")
    public Replica[] replicas;
    public UserManaged withReplicas(Replica[] replicas) {
        this.replicas = replicas;
        return this;
    }
}