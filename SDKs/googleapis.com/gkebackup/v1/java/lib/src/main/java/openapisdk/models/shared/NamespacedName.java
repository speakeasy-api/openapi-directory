package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * NamespacedName
 * A reference to a namespaced resource in Kubernetes.
**/
public class NamespacedName {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public NamespacedName withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("namespace")
    public String namespace;
    public NamespacedName withNamespace(String namespace) {
        this.namespace = namespace;
        return this;
    }
}