package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DeploymentUpdate {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("credential")
    public Credential credential;
    public DeploymentUpdate withCredential(Credential credential) {
        this.credential = credential;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public DeploymentUpdate withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("labels")
    public DeploymentUpdateLabelEntry[] labels;
    public DeploymentUpdate withLabels(DeploymentUpdateLabelEntry[] labels) {
        this.labels = labels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("manifest")
    public String manifest;
    public DeploymentUpdate withManifest(String manifest) {
        this.manifest = manifest;
        return this;
    }
}