package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * LocalObjectReference
 * Not supported by Cloud Run LocalObjectReference contains enough information to let you locate the referenced object inside the same namespace.
**/
public class LocalObjectReference {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public LocalObjectReference withName(String name) {
        this.name = name;
        return this;
    }
}