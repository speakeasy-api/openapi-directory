package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UserManagedStatus
 * The replication status of a SecretVersion using user-managed replication. Only populated if the parent Secret has a user-managed replication policy.
**/
public class UserManagedStatus {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("replicas")
    public ReplicaStatus[] replicas;
    public UserManagedStatus withReplicas(ReplicaStatus[] replicas) {
        this.replicas = replicas;
        return this;
    }
}