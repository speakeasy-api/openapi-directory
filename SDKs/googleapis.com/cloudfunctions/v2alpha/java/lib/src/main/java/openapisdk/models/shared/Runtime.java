package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Runtime
 * Describes a runtime and any special information (e.g., deprecation status) related to it.
**/
public class Runtime {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayName")
    public String displayName;
    public Runtime withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("environment")
    public RuntimeEnvironmentEnum environment;
    public Runtime withEnvironment(RuntimeEnvironmentEnum environment) {
        this.environment = environment;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public Runtime withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("stage")
    public RuntimeStageEnum stage;
    public Runtime withStage(RuntimeStageEnum stage) {
        this.stage = stage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("warnings")
    public String[] warnings;
    public Runtime withWarnings(String[] warnings) {
        this.warnings = warnings;
        return this;
    }
}