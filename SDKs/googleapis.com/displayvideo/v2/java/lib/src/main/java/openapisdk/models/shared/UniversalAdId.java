package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UniversalAdId
 * A creative identifier provided by a registry that is unique across all platforms. This is part of the VAST 4.0 standard.
**/
public class UniversalAdId {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public UniversalAdId withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("registry")
    public UniversalAdIdRegistryEnum registry;
    public UniversalAdId withRegistry(UniversalAdIdRegistryEnum registry) {
        this.registry = registry;
        return this;
    }
}