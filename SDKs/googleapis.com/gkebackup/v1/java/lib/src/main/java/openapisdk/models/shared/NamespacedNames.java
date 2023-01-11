package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * NamespacedNames
 * A list of namespaced Kubernetes resources.
**/
public class NamespacedNames {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("namespacedNames")
    public NamespacedName[] namespacedNames;
    public NamespacedNames withNamespacedNames(NamespacedName[] namespacedNames) {
        this.namespacedNames = namespacedNames;
        return this;
    }
}