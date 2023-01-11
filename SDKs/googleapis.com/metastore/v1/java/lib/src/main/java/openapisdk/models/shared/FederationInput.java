package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * FederationInput
 * Represents a federation of multiple backend metastores.
**/
public class FederationInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("backendMetastores")
    public java.util.Map<String, BackendMetastore> backendMetastores;
    public FederationInput withBackendMetastores(java.util.Map<String, BackendMetastore> backendMetastores) {
        this.backendMetastores = backendMetastores;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("labels")
    public java.util.Map<String, String> labels;
    public FederationInput withLabels(java.util.Map<String, String> labels) {
        this.labels = labels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public FederationInput withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("version")
    public String version;
    public FederationInput withVersion(String version) {
        this.version = version;
        return this;
    }
}