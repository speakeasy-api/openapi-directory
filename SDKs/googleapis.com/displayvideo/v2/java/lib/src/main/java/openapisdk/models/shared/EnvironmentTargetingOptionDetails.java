package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * EnvironmentTargetingOptionDetails
 * Represents a targetable environment. This will be populated in the environment_details field of a TargetingOption when targeting_type is `TARGETING_TYPE_ENVIRONMENT`.
**/
public class EnvironmentTargetingOptionDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("environment")
    public EnvironmentTargetingOptionDetailsEnvironmentEnum environment;
    public EnvironmentTargetingOptionDetails withEnvironment(EnvironmentTargetingOptionDetailsEnvironmentEnum environment) {
        this.environment = environment;
        return this;
    }
}