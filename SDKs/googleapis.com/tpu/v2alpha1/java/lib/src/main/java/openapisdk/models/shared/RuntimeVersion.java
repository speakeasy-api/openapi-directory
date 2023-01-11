package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * RuntimeVersion
 * A runtime version that a Node can be configured with.
**/
public class RuntimeVersion {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public RuntimeVersion withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("version")
    public String version;
    public RuntimeVersion withVersion(String version) {
        this.version = version;
        return this;
    }
}