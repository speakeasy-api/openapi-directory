package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Pod
 * Kubernetes Pod.
**/
public class Pod {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("containers")
    public Container[] containers;
    public Pod withContainers(Container[] containers) {
        this.containers = containers;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("labels")
    public Label[] labels;
    public Pod withLabels(Label[] labels) {
        this.labels = labels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public Pod withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ns")
    public String ns;
    public Pod withNs(String ns) {
        this.ns = ns;
        return this;
    }
}