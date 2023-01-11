package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Module
 * Binary module.
**/
public class Module {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("buildId")
    public TruncatableString buildId;
    public Module withBuildId(TruncatableString buildId) {
        this.buildId = buildId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("module")
    public TruncatableString module;
    public Module withModule(TruncatableString module) {
        this.module = module;
        return this;
    }
}