package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * NfsShareInput
 * An NFS share.
**/
public class NfsShareInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allowedClients")
    public AllowedClientInput[] allowedClients;
    public NfsShareInput withAllowedClients(AllowedClientInput[] allowedClients) {
        this.allowedClients = allowedClients;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("labels")
    public java.util.Map<String, String> labels;
    public NfsShareInput withLabels(java.util.Map<String, String> labels) {
        this.labels = labels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public NfsShareInput withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("requestedSizeGib")
    public String requestedSizeGib;
    public NfsShareInput withRequestedSizeGib(String requestedSizeGib) {
        this.requestedSizeGib = requestedSizeGib;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("storageType")
    public NfsShareStorageTypeEnum storageType;
    public NfsShareInput withStorageType(NfsShareStorageTypeEnum storageType) {
        this.storageType = storageType;
        return this;
    }
}