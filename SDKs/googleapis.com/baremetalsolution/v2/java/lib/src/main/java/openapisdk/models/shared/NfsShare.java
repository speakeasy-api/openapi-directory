package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * NfsShare
 * An NFS share.
**/
public class NfsShare {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allowedClients")
    public AllowedClient[] allowedClients;
    public NfsShare withAllowedClients(AllowedClient[] allowedClients) {
        this.allowedClients = allowedClients;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public NfsShare withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("labels")
    public java.util.Map<String, String> labels;
    public NfsShare withLabels(java.util.Map<String, String> labels) {
        this.labels = labels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public NfsShare withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nfsShareId")
    public String nfsShareId;
    public NfsShare withNfsShareId(String nfsShareId) {
        this.nfsShareId = nfsShareId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("requestedSizeGib")
    public String requestedSizeGib;
    public NfsShare withRequestedSizeGib(String requestedSizeGib) {
        this.requestedSizeGib = requestedSizeGib;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("state")
    public NfsShareStateEnum state;
    public NfsShare withState(NfsShareStateEnum state) {
        this.state = state;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("storageType")
    public NfsShareStorageTypeEnum storageType;
    public NfsShare withStorageType(NfsShareStorageTypeEnum storageType) {
        this.storageType = storageType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("volume")
    public String volume;
    public NfsShare withVolume(String volume) {
        this.volume = volume;
        return this;
    }
}