package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * InternalChecker
 * An internal checker allows Uptime checks to run on private/internal GCP resources.
**/
public class InternalChecker {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayName")
    public String displayName;
    public InternalChecker withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gcpZone")
    public String gcpZone;
    public InternalChecker withGcpZone(String gcpZone) {
        this.gcpZone = gcpZone;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public InternalChecker withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("network")
    public String network;
    public InternalChecker withNetwork(String network) {
        this.network = network;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("peerProjectId")
    public String peerProjectId;
    public InternalChecker withPeerProjectId(String peerProjectId) {
        this.peerProjectId = peerProjectId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("state")
    public InternalCheckerStateEnum state;
    public InternalChecker withState(InternalCheckerStateEnum state) {
        this.state = state;
        return this;
    }
}