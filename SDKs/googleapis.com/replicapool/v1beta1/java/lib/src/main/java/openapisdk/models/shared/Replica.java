package openapisdk.models.shared;



/**
 * Replica
 * An individual Replica within a Pool. Replicas are automatically created by the replica pool, using the template provided by the user. You cannot directly create replicas.
**/
public class Replica {
    public String name;
    public Replica withName(String name) {
        this.name = name;
        return this;
    }
    public String selfLink;
    public Replica withSelfLink(String selfLink) {
        this.selfLink = selfLink;
        return this;
    }
    public ReplicaStatus status;
    public Replica withStatus(ReplicaStatus status) {
        this.status = status;
        return this;
    }
}