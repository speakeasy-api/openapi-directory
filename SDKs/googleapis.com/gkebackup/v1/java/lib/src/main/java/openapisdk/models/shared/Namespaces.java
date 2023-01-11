package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Namespaces
 * A list of Kubernetes Namespaces
**/
public class Namespaces {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("namespaces")
    public String[] namespaces;
    public Namespaces withNamespaces(String[] namespaces) {
        this.namespaces = namespaces;
        return this;
    }
}