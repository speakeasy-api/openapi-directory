package openapisdk.models.shared;



/**
 * ReplicaStatus
 * The current status of a Replica.
**/
public class ReplicaStatus {
    public String details;
    public ReplicaStatus withDetails(String details) {
        this.details = details;
        return this;
    }
    public String state;
    public ReplicaStatus withState(String state) {
        this.state = state;
        return this;
    }
    public String templateVersion;
    public ReplicaStatus withTemplateVersion(String templateVersion) {
        this.templateVersion = templateVersion;
        return this;
    }
    public String vmLink;
    public ReplicaStatus withVmLink(String vmLink) {
        this.vmLink = vmLink;
        return this;
    }
    public String vmStartTime;
    public ReplicaStatus withVmStartTime(String vmStartTime) {
        this.vmStartTime = vmStartTime;
        return this;
    }
}